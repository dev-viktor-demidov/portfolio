import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-white/5 bg-white/[0.015]"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeading index="04" title="Experience" />

        <ol className="relative border-l border-white/10">
          {experience.map((item, i) => (
            <Reveal
              key={`${item.company}-${i}`}
              as="li"
              delay={i * 100}
              className="relative ml-6 pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <span className="absolute -left-[1.95rem] top-1.5 grid h-3 w-3 place-items-center rounded-full border border-accent/60 bg-zinc-950">
                <span className="h-1 w-1 rounded-full bg-accent" />
              </span>

              <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-100">
                {item.role}{" "}
                <span className="text-accent-bright">@ {item.company}</span>
              </h3>
              <p className="mt-2 text-zinc-400">{item.description}</p>

              {item.highlights?.length ? (
                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-zinc-400"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
