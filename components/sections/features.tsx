import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Shield,
  Calendar,
  MessageCircle,
  CreditCard,
  Smartphone,
  Building2,
  Stethoscope,
  ShoppingCart,
  Phone,
  UserCheck,
  Clock,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Verified Caregivers",
    description: "All caregivers undergo thorough background checks and skill verification.",
    category: "Trust & Safety",
  },
  {
    icon: Calendar,
    title: "Easy Scheduling",
    description: "Book care services with real-time availability and instant confirmation.",
    category: "Convenience",
  },
  {
    icon: MessageCircle,
    title: "AI Care Assistant",
    description: "24/7 AI-powered support for care questions and emergency guidance.",
    category: "Support",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Integrated payment system with Stripe and PayPal for safe transactions.",
    category: "Payments",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native iOS and Android apps for caregivers and families on the go.",
    category: "Accessibility",
  },
  {
    icon: Building2,
    title: "Agency Portal",
    description: "Comprehensive management tools for care agencies and organizations.",
    category: "Business",
  },
  {
    icon: Stethoscope,
    title: "Medical Integration",
    description: "Connect with hospitals and healthcare providers for seamless care.",
    category: "Healthcare",
  },
  {
    icon: ShoppingCart,
    title: "Care Marketplace",
    description: "Shop for elderly care products, medical supplies, and services.",
    category: "Shopping",
  },
  {
    icon: Phone,
    title: "Emergency Hotline",
    description: "Instant access to emergency services and urgent care coordination.",
    category: "Emergency",
  },
  {
    icon: UserCheck,
    title: "Background Checks",
    description: "Real-time verification status and comprehensive screening reports.",
    category: "Verification",
  },
  {
    icon: Shield,
    title: "Insurance Ready",
    description: "HIPAA-compliant platform ready for insurance integrations.",
    category: "Compliance",
  },
  {
    icon: Clock,
    title: "Flexible Care",
    description: "From hourly visits to live-in care, find the right fit for your needs.",
    category: "Flexibility",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Everything You Need for Quality Care</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform brings together families, caregivers, agencies, and healthcare providers in one
            trusted ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-xs text-primary font-medium">{feature.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
