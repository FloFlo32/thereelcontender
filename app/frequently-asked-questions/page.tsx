import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { FaqList, type FaqItem } from "@/components/sections/faq-list";
import { GridPattern } from "@/components/magic/grid-pattern";
import { Reveal } from "@/components/magic/reveal";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Things you need to know when fishing on The Reel Contender: trip length, party size, what's provided, and what to bring.",
};

const faqs: FaqItem[] = [
  {
    question: "How many anglers per trip?",
    answer:
      "The Reel Contender Charter Service offers a more personalized fishing experience well suited for smaller private fishing parties from 1 to 5 anglers.",
  },
  {
    question: "What is provided with my trip?",
    answer: "Bait, tackle and license will be provided.",
  },
  {
    question: "What will I need to bring?",
    answer:
      "Sunglasses, sunscreen, drinks, snacks and a cooler to carry your catch home. Be sure to wear shoes with light non-skid bottoms. It is customary to tip your deck hand.",
  },
  {
    question: "How long will my trip be?",
    answer:
      "Trips offered are between 5 to 10 hours and can be customized to fit your needs.",
  },
  {
    question: "What about poor weather?",
    answer:
      "Capt. David will gladly answer any questions and if he feels that the trip will be unsafe or uncomfortable then the trip can be rescheduled for another date.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <GridPattern className="opacity-70" />
          <div className="container-px mx-auto max-w-6xl pt-14 pb-10 text-center sm:pt-20 sm:pb-14">
            <Reveal>
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                FAQ
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mx-auto mt-6 max-w-2xl text-balance text-5xl font-bold sm:text-6xl">
                Frequently Asked Questions
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                Things you need to know when fishing on The Reel Contender.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-px mx-auto max-w-6xl pb-24">
          <FaqList items={faqs} />
        </section>
      </main>
      <Footer />
    </>
  );
}
