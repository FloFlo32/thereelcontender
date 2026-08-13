import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";
import { Button } from "@/components/ui/button";
import { brand } from "@/brand.config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Reel Contender to book a sport fishing charter out of Panama City Beach, Florida.",
};

const phoneDisplay = "850-259-2789";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <GridPattern className="opacity-70" />
          <div className="container-px mx-auto max-w-6xl pt-14 pb-10 text-center sm:pt-20 sm:pb-14">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Get in touch
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold sm:text-6xl">
                Contact
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Contact Us:
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-8">
                <div>
                  <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                    <Phone className="size-5" />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold">Call or text</h2>
                  <p className="mt-2 text-muted-foreground">
                    The fastest way to book your trip and talk through dates
                    with Capt. David.
                  </p>
                  <a
                    href={`tel:${brand.contact.phone}`}
                    className="mt-4 block text-2xl font-semibold text-primary cursor-pointer"
                  >
                    {phoneDisplay}
                  </a>
                </div>
                <Button asChild size="lg" className="w-full">
                  <a href={`tel:${brand.contact.phone}`}>Call {phoneDisplay}</a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
