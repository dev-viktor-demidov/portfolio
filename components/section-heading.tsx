import { Reveal } from "@/components/reveal";

type SectionHeadingProps = {
  /** Two-digit index shown in mono, e.g. "01". */
  index: string;
  title: string;
  /** Optional supporting line under the title. */
  subtitle?: string;
};

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 font-mono text-sm text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/40" />
        <span className="text-zinc-500">{title.toLowerCase()}</span>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-base text-zinc-400">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
