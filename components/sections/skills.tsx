import { skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/5 bg-white/[0.015]">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="The tools and technologies I reach for most often."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 100}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20"
            >
              <h3 className="font-mono text-sm text-accent">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
