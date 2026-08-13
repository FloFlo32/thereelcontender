import { Users, Clock, Anchor, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/magic/reveal";
import { GridPattern } from "@/components/magic/grid-pattern";
import { cn } from "@/lib/utils";

function Cell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <RevealItem
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
    >
      {children}
    </RevealItem>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
      {children}
    </div>
  );
}

export function QuickFacts() {
  return (
    <section className="container-px mx-auto max-w-6xl py-20 sm:py-24">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          What to expect
        </span>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
          A private trip, built around your crew
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid auto-rows-[13rem] grid-cols-1 gap-4 md:grid-cols-3">
        <Cell className="md:col-span-2">
          <GridPattern variant="dots" className="opacity-60" />
          <Icon>
            <Users className="size-5" />
          </Icon>
          <h3 className="text-xl font-semibold">Small, private parties</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            The Reel Contender Charter Service offers a more personalized
            fishing experience well suited for smaller private fishing
            parties from 1 to 5 anglers.
          </p>
        </Cell>

        <Cell>
          <Icon>
            <Clock className="size-5" />
          </Icon>
          <h3 className="text-xl font-semibold">5 to 10 hour trips</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Trips can be customized to fit your needs, near shore or
            offshore.
          </p>
        </Cell>

        <Cell>
          <Icon>
            <Anchor className="size-5" />
          </Icon>
          <h3 className="text-xl font-semibold">28&apos; Contender</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Twin 200hp Yamaha HPDI engines. Comfort and speed for both near
            shore and offshore trips.
          </p>
        </Cell>

        <Cell className="md:col-span-2">
          <Icon>
            <ShieldCheck className="size-5" />
          </Icon>
          <h3 className="text-xl font-semibold">Bait, tackle and license included</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Bait, tackle and license will be provided. Just bring sunglasses,
            sunscreen, drinks, snacks and a cooler to carry your catch home.
          </p>
        </Cell>
      </RevealGroup>
    </section>
  );
}
