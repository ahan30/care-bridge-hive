import Link from "next/link"
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Care Bridge Hive</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Connecting families with trusted caregivers through our comprehensive care platform. Quality care,
              verified professionals, 24/7 support.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/find-caregivers"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Find Caregivers
              </Link>
              <Link
                href="/services/companion-care"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Companion Care
              </Link>
              <Link
                href="/services/medical-care"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Medical Care
              </Link>
              <Link
                href="/services/housekeeping"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Housekeeping
              </Link>
              <Link
                href="/services/transportation"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Transportation
              </Link>
              <Link href="/marketplace" className="block text-muted-foreground hover:text-foreground transition-colors">
                Care Marketplace
              </Link>
            </nav>
          </div>

          {/* For Professionals */}
          <div className="space-y-4">
            <h3 className="font-semibold">For Professionals</h3>
            <nav className="space-y-2 text-sm">
              <Link
                href="/caregivers/join"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Become a Caregiver
              </Link>
              <Link href="/agencies" className="block text-muted-foreground hover:text-foreground transition-colors">
                Agency Portal
              </Link>
              <Link href="/hospitals" className="block text-muted-foreground hover:text-foreground transition-colors">
                Hospital Integration
              </Link>
              <Link href="/insurance" className="block text-muted-foreground hover:text-foreground transition-colors">
                Insurance Partners
              </Link>
              <Link
                href="/verification"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Background Checks
              </Link>
              <Link href="/training" className="block text-muted-foreground hover:text-foreground transition-colors">
                Training Courses
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Connected</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>1-800-CARE-HIVE</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@carebridgehive.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Available Nationwide</span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Newsletter</h4>
              <p className="text-xs text-muted-foreground">Get care tips and platform updates</p>
              <div className="flex gap-2">
                <Input placeholder="Enter email" className="text-xs" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
          </div>
          <div>© 2024 Care Bridge Hive. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
