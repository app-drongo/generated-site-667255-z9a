// Template-enhanced component (UNIQUE VERSION)
// Generated: 2025-08-22T10:47:33.003Z
// Section: hero
// Category: hero
// Template ID: hero-s001
// Page: Home
// Component: Hero

// components/hero/HeroSection.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              Luxury Homes in Beverly Hills
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover the Finest Luxury Homes
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                with Amanda Foster
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Explore the most exclusive and prestigious properties in Beverly Hills with Amanda Foster, your trusted luxury real estate expert.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group px-7 text-base">
                Explore Listings
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Play className="mr-2 size-5" /> Watch Video Tour
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Luxury Home in Beverly Hills"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium shadow">
                Featured Listing
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Expertise</p>
              <p className="text-sm">
                <span className="font-semibold">15+</span> Years in Beverly Hills
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Luxury Homes</p>
              <p className="text-sm">
                <span className="font-semibold">$50M+</span> Average Price
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}