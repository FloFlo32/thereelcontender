import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Anchor, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/magic/aurora-background";
import { Reveal } from "@/components/magic/reveal";

const chips = [
  { icon: Users, label: "1 to 5 anglers per trip" },
  { icon: Clock, label: "5 to 10 hour trips" },
  { icon: Anchor, label: "USCG licensed captain" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/15 via-background to-accent-warm/15"
      />
      <AuroraBackground className="opacity-80" />

      <div className="container-px mx-auto grid max-w-6xl items-center gap-12 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Panama City Beach, Florida
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              The Reel Contender
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-xl font-medium text-primary sm:text-2xl">
              Sport Fishing Charter Service
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground text-pretty">
              A more personalized fishing experience aboard a 28&apos; Contender
              with twin 200hp Yamaha HPDI engines. Private charters for
              beginners and experienced anglers alike, guided by USCG licensed
              Captain David Burke off the coast of Panama City Beach.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book with us TODAY! <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/photos">View the photos</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {chips.map((c) => (
                <div key={c.label} className="flex items-center gap-2 text-sm text-foreground/80">
                  <c.icon className="size-4 text-primary" />
                  {c.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-primary/10">
            <Image
              src="/ingested/thereelcontender/img-004.webp"
              alt="The Reel Contender, a 28' Contender center console fishing boat, running on the water near Panama City, Florida"
              width={1200}
              height={900}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-lg sm:block">
            <p className="font-display text-2xl font-bold text-primary">28&apos;</p>
            <p className="text-xs text-muted-foreground">Contender, twin 200hp Yamaha</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
