import { promises as fs } from "fs";
import path from "path";

export type StoredUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: string;
};

type StoreFile = { users: StoredUser[] };

function storePath(): string {
  if (process.env.VERCEL) return "/tmp/nexa-users.json";
  return path.join(process.cwd(), "data", "users.json");
}

let writeQueue: Promise<void> = Promise.resolve();

function enqueue<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeQueue.then(fn, fn);
  writeQueue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

async function readFile(): Promise<StoreFile> {
  const file = storePath();
  try {
    const raw = await fs.readFile(file, "utf8");
    const data = JSON.parse(raw) as StoreFile;
    if (!Array.isArray(data.users)) return { users: [] };
    return data;
  } catch {
    return { users: [] };
  }
}

async function writeFile(data: StoreFile): Promise<void> {
  const file = storePath();
  if (!process.env.VERCEL) {
    await fs.mkdir(path.dirname(file), { recursive: true });
  }
  await fs.writeFile(file, JSON.stringify(data, null, 2), "utf8");
}

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  const normalized = email.trim().toLowerCase();
  const data = await readFile();
  return data.users.find((u) => u.email.toLowerCase() === normalized) ?? null;
}

export async function createUser(input: {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
}): Promise<void> {
  await enqueue(async () => {
    const data = await readFile();
    const email = input.email.trim().toLowerCase();
    if (data.users.some((u) => u.email.toLowerCase() === email)) {
      throw new Error("EMAIL_TAKEN");
    }
    data.users.push({
      id: input.id,
      email,
      name: input.name.trim(),
      passwordHash: input.passwordHash,
      createdAt: new Date().toISOString()
    });
    await writeFile(data);
  });
}
