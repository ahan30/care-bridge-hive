import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, UserCheck, Calendar, Heart } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    icon: Search,
    title: "Search & Discover",
    description: "Browse verified caregivers in your area with detailed profiles, reviews, and availability.",
    action: "Find Caregivers",
  },
  {
    icon: UserCheck,
    title: "Connect & Interview",
    description: "Chat with potential caregivers, check references, and schedule meet-and-greets.",
    action: "Start Chatting",
  },
  {
    icon: Calendar,
    title: "Book & Schedule",
    description: "Schedule care services with flexible timing and automatic confirmations.",
    action: "Book Services",
  },
  {
    icon: Heart,
    title: "Receive Quality Care",
    description: "Enjoy peace of mind with ongoing support, monitoring, and 24/7 assistance.",
    action: "Get Support",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">How Care Bridge Hive Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these four easy steps to find the perfect care for your loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{step.description}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/step-${index + 1}`}>{step.action}</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/auth/register">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
