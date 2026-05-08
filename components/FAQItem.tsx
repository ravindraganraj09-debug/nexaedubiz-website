type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="glass-card group p-5">
      <summary className="cursor-pointer list-none text-base font-semibold text-white">
        <span className="flex items-center justify-between gap-4">
          {question}
          <span className="text-cyan-300 transition group-open:rotate-45">+</span>
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{answer}</p>
    </details>
  );
}
