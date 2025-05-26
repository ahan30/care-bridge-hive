import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Clock, Shield, Star, Heart } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-50"></div>
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Trusted Care for Your <span className="text-primary">Loved Ones</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Connect with verified caregivers, book services, and access 24/7 support through our comprehensive care
                platform.
              </p>
            </div>

            {/* Quick Search */}
            <div className="bg-white dark:bg-card rounded-lg p-6 shadow-lg border">
              <h3 className="font-semibold mb-4">Find Care Near You</h3>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter your location" className="pl-10" />
                  </div>
                  <Button>
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/find-caregivers?type=companion">Companion Care</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/find-caregivers?type=medical">Medical Care</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/find-caregivers?type=housekeeping">Housekeeping</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/find-caregivers?type=transportation">Transportation</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Background Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <div className="h-full w-full rounded-xl bg-white dark:bg-card shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">50,000+</h3>
                    <p className="text-muted-foreground">Verified Caregivers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-card rounded-lg p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-card rounded-lg p-4 shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
