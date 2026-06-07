import { projects } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ArrowUpRightIcon, CodeIcon } from "@/components/icons";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Selected Work"
        subtitle="A few things I've designed, built, and shipped."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 2) * 100}
            as="article"
            className={`group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.04] ${
              project.featured ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-zinc-100">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-zinc-500">
                {project.sourceUrl ? (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code`}
                    className="transition-colors hover:text-accent-bright"
                  >
                    <CodeIcon className="h-5 w-5" />
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className="transition-colors hover:text-accent-bright"
                  >
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </a>
                ) : null}
              </div>
            </div>

            <p className="mt-3 flex-1 text-zinc-400">{project.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent-bright"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
