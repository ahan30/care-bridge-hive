"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Phone, MessageCircle } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Care Bridge Hive</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/find-caregivers" className="text-sm font-medium hover:text-primary transition-colors">
            Find Caregivers
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/agencies" className="text-sm font-medium hover:text-primary transition-colors">
            For Agencies
          </Link>
          <Link href="/hospitals" className="text-sm font-medium hover:text-primary transition-colors">
            For Hospitals
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/emergency" className="text-red-600 hover:text-red-700">
              <Phone className="h-4 w-4 mr-2" />
              Emergency
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/chat">
              <MessageCircle className="h-4 w-4 mr-2" />
              AI Assistant
            </Link>
          </Button>
          <ModeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/auth/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link href="/find-caregivers" className="block text-sm font-medium hover:text-primary">
              Find Caregivers
            </Link>
            <Link href="/services" className="block text-sm font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/agencies" className="block text-sm font-medium hover:text-primary">
              For Agencies
            </Link>
            <Link href="/hospitals" className="block text-sm font-medium hover:text-primary">
              For Hospitals
            </Link>
            <Link href="/about" className="block text-sm font-medium hover:text-primary">
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/emergency" className="text-red-600 hover:text-red-700 justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/chat" className="justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  AI Assistant
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/register">Get Started</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
