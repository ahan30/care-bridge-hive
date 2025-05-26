import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Daughter caring for elderly mother",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "Care Bridge Hive helped us find the perfect caregiver for my mother. The verification process gave us complete peace of mind, and the 24/7 support has been invaluable.",
  },
  {
    name: "Michael Chen",
    role: "Professional Caregiver",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "As a caregiver, this platform has transformed my business. The payment system is seamless, and I love how it connects me with families who truly value quality care.",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Hospital Administrator",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The B2B integration has streamlined our discharge planning. We can now seamlessly connect patients with verified home care services, improving outcomes significantly.",
  },
  {
    name: "David Thompson",
    role: "Agency Owner",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The agency portal is incredibly comprehensive. From hiring management to payroll, everything is integrated. It has helped us scale our operations efficiently.",
  },
  {
    name: "Lisa Park",
    role: "Family Caregiver",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The AI assistant has been a game-changer for our family. Getting instant answers to care questions at 3 AM has reduced our stress tremendously.",
  },
  {
    name: "Robert Williams",
    role: "Insurance Coordinator",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    content:
      "The platform's compliance features and integration capabilities have made it easy for us to work with Care Bridge Hive for our members' home care needs.",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Trusted by Thousands of Families</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what families, caregivers, and healthcare professionals are saying about Care Bridge Hive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
