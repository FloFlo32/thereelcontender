import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { brand } from "@/brand.config";

const explore = [
  { label: "Home", href: "/" },
  { label: "Photos", href: "/photos" },
  { label: "FAQ", href: "/frequently-asked-questions" },
  { label: "Contact", href: "/contact" },
];

const phoneDisplay = "850-259-2789";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/70 bg-card">
      <div className="container-px mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center cursor-pointer">
            <Image
              src="/logo.webp"
              alt={brand.name}
              width={200}
              height={57}
              className="h-11 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Private, personalized sport fishing charters out of Panama City Beach,
            Florida. Near shore to offshore, for beginners and experienced anglers
            alike.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Image
              src="/ingested/thereelcontender/img-003.gif"
              alt="Find us on TripAdvisor"
              width={56}
              height={56}
              unoptimized
              className="size-14 rounded-full"
            />
            <Image
              src="/ingested/thereelcontender/img-002.webp"
              alt="Find us on KAYAK Travel Guides"
              width={56}
              height={56}
              className="size-14 rounded-full"
            />
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5">
            {explore.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-foreground/90 transition-colors hover:text-primary cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Get in touch
          </h4>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`tel:${brand.contact.phone}`}
                className="flex items-start gap-2.5 text-sm text-foreground/90 transition-colors hover:text-primary cursor-pointer"
              >
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                {phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              Panama City Beach, Florida
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-6">
        <p className="container-px mx-auto max-w-6xl text-sm text-muted-foreground">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
