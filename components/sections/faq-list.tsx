"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/magic/reveal";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

export function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <RevealGroup className="mx-auto max-w-3xl space-y-4">
      {items.map((item, i) => {
        const expanded = open === i;
        return (
          <RevealItem
            key={item.question}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : i)}
              aria-expanded={expanded}
              className="flex w-full cursor-pointer items-center justify-between gap-4 p-6 text-left"
            >
              <span className="text-lg font-semibold">{item.question}</span>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-primary transition-transform duration-300",
                  expanded && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-muted-foreground text-pretty">
                  {item.answer}
                </p>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
