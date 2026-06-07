import { profile, socials } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { ArrowUpRightIcon, SocialIcon } from "@/components/icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-6 py-28 md:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-deep/15 blur-[120px]" />
      </div>

      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-sm text-accent">05 — Contact</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Let&apos;s build something.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-lg text-zinc-400">
          I&apos;m currently open to new projects and collaborations. Have an
          idea or a role in mind? My inbox is always open.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-7 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            {profile.email}
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-zinc-500 transition-colors hover:text-accent-bright"
              >
                <SocialIcon name={social.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
