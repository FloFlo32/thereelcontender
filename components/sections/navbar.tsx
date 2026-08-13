"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/brand.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/photos", label: "Photos" },
  { href: "/frequently-asked-questions", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const phoneDisplay = "850-259-2789";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container-px mx-auto max-w-6xl pt-4">
        <nav
          className={cn(
            "flex h-16 items-center justify-between rounded-2xl border px-3 pl-4 transition-all duration-300 sm:px-4",
            scrolled
              ? "border-border/60 bg-background/30 shadow-lg shadow-primary/5 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-2.5 shrink-0 cursor-pointer">
            <Image
              src="/logo.webp"
              alt={brand.name}
              width={168}
              height={48}
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${brand.contact.phone}`}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:flex cursor-pointer"
            >
              <Phone className="size-4 text-primary" />
              {phoneDisplay}
            </a>
            <Button asChild size="sm" className="hidden md:inline-flex">
              <Link href="/contact">Book with us TODAY!</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-lg backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1 p-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors cursor-pointer",
                    pathname === l.href
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={`tel:${brand.contact.phone}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-foreground cursor-pointer"
              >
                <Phone className="size-4 text-primary" />
                {phoneDisplay}
              </a>
              <Button asChild className="mt-1">
                <Link href="/contact">Book with us TODAY!</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
