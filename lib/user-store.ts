import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type StoredUser = {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: string;
};

function toStoredUser(user: {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: Date;
}): StoredUser {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    passwordHash: user.passwordHash,
    createdAt: user.createdAt.toISOString()
  };
}

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  const normalized = email.trim().toLowerCase();
  const user = await prisma.user.findUnique({ where: { email: normalized } });
  return user ? toStoredUser(user) : null;
}

export async function createUser(input: {
  /** id is ignored — Prisma generates it via @default(cuid()). */
  id?: string;
  email: string;
  name: string;
  passwordHash: string;
}): Promise<StoredUser> {
  const email = input.email.trim().toLowerCase();
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name: input.name.trim(),
        passwordHash: input.passwordHash
      }
    });
    return toStoredUser(user);
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("EMAIL_TAKEN");
    }
    throw error;
  }
}
