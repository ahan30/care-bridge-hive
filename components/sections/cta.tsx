import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, ArrowRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Find the Perfect Care?</h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of families who trust Care Bridge Hive for their caregiving needs. Get started today and
                experience the difference quality care makes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/auth/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/demo">Schedule Demo</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                <span>24/7 support included</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  Need Immediate Help?
                </CardTitle>
                <CardDescription>Our emergency hotline is available 24/7 for urgent care needs.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" size="lg" className="w-full" asChild>
                  <Link href="/emergency">Call Emergency Line</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Have Questions?
                </CardTitle>
                <CardDescription>Chat with our AI assistant or speak with a care coordinator.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="/chat">Start Chat</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
