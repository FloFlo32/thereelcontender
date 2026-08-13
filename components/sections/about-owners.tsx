import Image from "next/image";
import { Reveal } from "@/components/magic/reveal";

export function AboutOwners() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-primary/5">
            <Image
              src="/ingested/thereelcontender/img-005.webp"
              alt="A happy angler holding a large amberjack caught aboard The Reel Contender"
              width={1000}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={78}
              className="aspect-square w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              About the owners
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              David &amp; Kim Burke
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-5 space-y-4 text-muted-foreground text-pretty">
              <p>
                David and Kim Burke are the owners of The Reel Contender
                Fishing Charters. David is a USCG licensed captain and will
                be your guide. Capt. David was born in Niceville, FL and
                grew up in Bruce, FL, about 15 minutes from Panama City. Kim
                and David reside in Bruce and David has called the panhandle
                home for 40 years.
              </p>
              <p>
                When David is not overseeing grading and paving operations
                he can be found in the woods or on the water. David is a
                local, experienced captain with a great knowledge of the
                many fishing regulations and an understanding of various
                fish species off the coast of Panama City Beach.
              </p>
              <p>
                Captain David loves to fish when he has the time, whether it
                is 1 mile offshore to 30 miles, but what he really enjoys is
                guiding others and watching them catch fish and have some
                fun.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
