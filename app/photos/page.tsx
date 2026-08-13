import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Gallery, type GalleryImage } from "@/components/magic/gallery";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Photos",
  description:
    "Photos from The Reel Contender's sport fishing charters out of Panama City Beach, Florida.",
};

const captions = [
  "A day's catch aboard The Reel Contender",
  "Guests with their catch, Panama City Beach",
  "Red snapper and king mackerel from a recent charter",
  "A private party fishing with Capt. David Burke",
  "Anglers on the dock after a Reel Contender trip",
];

const excluded = new Set([1, 2, 3]); // logo + KAYAK/TripAdvisor badges, not trip photos
const images: GalleryImage[] = Array.from({ length: 55 }, (_, i) => i + 1)
  .filter((n) => !excluded.has(n))
  .map((n, i) => {
    const num = String(n).padStart(3, "0");
    return {
      src: `/ingested/thereelcontender/img-${num}.webp`,
      alt: `${captions[i % captions.length]} (${i + 1})`,
    };
  });

export default function PhotosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <GridPattern className="opacity-70" />
          <div className="container-px mx-auto max-w-6xl pt-14 pb-10 text-center sm:pt-20 sm:pb-14">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                {brand.name}
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold sm:text-6xl">
                Photos
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                A look at real trips, real catches, and the guests who reeled
                them in off Panama City Beach.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <Gallery images={images} />
        </section>
      </main>
      <Footer />
    </>
  );
}
