import Link from "next/link";
import { profile, socials } from "@/lib/content";
import { ArrowUpRightIcon, SocialIcon } from "@/components/icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Ambient background: grid + drifting glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid" />
        <div className="glow absolute -top-32 left-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent-deep/20 blur-[120px]" />
        <div className="glow-alt absolute -right-20 top-1/3 h-[28rem] w-[28rem] rounded-full bg-glow/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 py-32">
        {profile.availability ? (
          <p className="animate-[fadeIn_0.6s_ease-out] mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </p>
        ) : null}

        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-zinc-100">Hi, I&apos;m </span>
          <span className="text-gradient">{profile.name}</span>
          <span className="text-zinc-100">.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-zinc-400 sm:text-2xl">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            View my work
            <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-12 flex items-center gap-5">
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
    </section>
  );
}
