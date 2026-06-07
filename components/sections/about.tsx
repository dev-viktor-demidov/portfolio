import { profile } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24 md:py-32">
      <SectionHeading index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-400">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <dl className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Location
              </dt>
              <dd className="mt-1 text-zinc-200">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-zinc-200 transition-colors hover:text-accent-bright"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-zinc-500">
                Focus
              </dt>
              <dd className="mt-1 text-zinc-200">{profile.role}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
