import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { GridPattern } from "@/components/magic/grid-pattern";
import { BorderBeam } from "@/components/magic/border-beam";
import { Reveal } from "@/components/magic/reveal";

const phoneDisplay = "850-259-2789";

export function CTA() {
  return (
    <section id="cta" className="container-px mx-auto max-w-6xl py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
          <BorderBeam duration={9} />
          <GridPattern className="opacity-60" />
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-bold sm:text-5xl">
            Book with us <span className="text-primary">TODAY!</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Call or send a message and Capt. David will help you plan the
            right trip for your crew.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Book with us TODAY!</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${brand.contact.phone}`}>
                <Phone className="size-4" /> {phoneDisplay}
              </a>
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <Image
              src="/ingested/thereelcontender/img-003.gif"
              alt="Find us on TripAdvisor"
              width={64}
              height={64}
              unoptimized
              className="size-16 rounded-full"
            />
            <Image
              src="/ingested/thereelcontender/img-002.webp"
              alt="Find us on KAYAK Travel Guides"
              width={64}
              height={64}
              className="size-16 rounded-full"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
