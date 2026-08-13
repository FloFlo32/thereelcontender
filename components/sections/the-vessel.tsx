import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/magic/reveal";
import { AutoSlider } from "@/components/magic/auto-slider";
import { Button } from "@/components/ui/button";

const catches = [
  { src: "/ingested/thereelcontender/img-010.webp", alt: "A rack of red snapper, amberjack and grouper caught aboard The Reel Contender" },
  { src: "/ingested/thereelcontender/img-013.webp", alt: "A fishing party with king mackerel and red snapper on the dock in Panama City" },
  { src: "/ingested/thereelcontender/img-020.webp", alt: "A family fishing charter group with a big catch of red snapper" },
  { src: "/ingested/thereelcontender/img-025.webp", alt: "Anglers posing with king mackerel and red snapper on the dock" },
  { src: "/ingested/thereelcontender/img-030.webp", alt: "A fishing charter group with a large catch of red snapper" },
  { src: "/ingested/thereelcontender/img-035.webp", alt: "A group holding red snapper, kingfish and grouper next to the Reel Contender sign" },
];

export function TheVessel() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-24">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                The vessel
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
                Built for the Gulf
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-muted-foreground text-pretty">
                Our vessel is a 28&apos; Contender with twin 200hp Yamaha HPDI
                engines. The Contender boat is made for fishing the Gulf,
                with a combination of comfort and speed. This boat is
                perfectly suited for both near shore and offshore trips.
                Anglers looking for a more private, personalized and
                enjoyable fishing experience are looking for a trip aboard
                The Reel Contender.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Button asChild variant="outline" className="mt-7">
                <Link href="/photos">
                  See more from our trips <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <AutoSlider itemClassName="w-[78%] sm:w-[55%] lg:w-[60%]">
              {catches.map((c) => (
                <div
                  key={c.src}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.src}
                    alt={c.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ))}
            </AutoSlider>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
