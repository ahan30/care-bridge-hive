"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Search,
  MapPin,
  Star,
  Clock,
  Shield,
  MessageCircle,
  Calendar,
  Filter,
  Heart,
  Languages,
  Award,
  CheckCircle,
} from "lucide-react"

const caregivers = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 25,
    location: "Downtown, 2.3 miles",
    specialties: ["Companion Care", "Medication Management", "Mobility Assistance"],
    languages: ["English", "Spanish"],
    experience: "8 years",
    verified: true,
    available: true,
    bio: "Compassionate caregiver with extensive experience in elderly care. Specialized in dementia care and post-surgery recovery.",
    certifications: ["CNA", "CPR", "First Aid"],
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 30,
    location: "Midtown, 1.8 miles",
    specialties: ["Medical Care", "Physical Therapy", "Wound Care"],
    languages: ["English", "Mandarin"],
    experience: "12 years",
    verified: true,
    available: true,
    bio: "Licensed nurse with specialization in home healthcare. Expert in managing complex medical conditions.",
    certifications: ["RN", "CPR", "Wound Care Specialist"],
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 22,
    location: "Westside, 3.1 miles",
    specialties: ["Housekeeping", "Meal Preparation", "Transportation"],
    languages: ["English", "Spanish", "Portuguese"],
    experience: "6 years",
    verified: true,
    available: false,
    bio: "Dedicated home care assistant focused on maintaining a clean, safe, and comfortable environment.",
    certifications: ["Home Care Aide", "Safe Driving", "Food Safety"],
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 4.7,
    reviews: 73,
    hourlyRate: 28,
    location: "Eastside, 4.2 miles",
    specialties: ["Companion Care", "Pet Care", "Light Housekeeping"],
    languages: ["English"],
    experience: "5 years",
    verified: true,
    available: true,
    bio: "Friendly companion caregiver who loves working with seniors and their pets. Great at engaging conversation.",
    certifications: ["Companion Care", "Pet First Aid", "CPR"],
  },
]

const serviceTypes = [
  "Companion Care",
  "Medical Care",
  "Housekeeping",
  "Transportation",
  "Meal Preparation",
  "Medication Management",
  "Physical Therapy",
  "Pet Care",
]

export default function FindCaregiversPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([15, 50])
  const [sortBy, setSortBy] = useState("rating")
  const [showFilters, setShowFilters] = useState(false)

  const filteredCaregivers = caregivers.filter((caregiver) => {
    const matchesSearch =
      caregiver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caregiver.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesServices =
      selectedServices.length === 0 || selectedServices.some((service) => caregiver.specialties.includes(service))
    const matchesPrice = caregiver.hourlyRate >= priceRange[0] && caregiver.hourlyRate <= priceRange[1]

    return matchesSearch && matchesServices && matchesPrice
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Search Header */}
        <div className="space-y-6 mb-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl lg:text-4xl font-bold">Find Your Perfect Caregiver</h1>
            <p className="text-xl text-muted-foreground">Browse verified caregivers in your area</p>
          </div>

          {/* Search Bar */}
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search caregivers or services"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="distance">Nearest First</SelectItem>
                    <SelectItem value="experience">Most Experienced</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="w-full">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          {showFilters && (
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Services Needed</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {serviceTypes.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedServices([...selectedServices, service])
                            } else {
                              setSelectedServices(selectedServices.filter((s) => s !== service))
                            }
                          }}
                        />
                        <label htmlFor={service} className="text-sm">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Hourly Rate Range</h4>
                  <div className="space-y-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}/hour</span>
                      <span>${priceRange[1]}/hour</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{filteredCaregivers.length} Caregivers Found</h2>
            <div className="text-sm text-muted-foreground">Showing results for your area</div>
          </div>

          <div className="grid gap-6">
            {filteredCaregivers.map((caregiver) => (
              <Card key={caregiver.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-6">
                    {/* Profile */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="relative">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={caregiver.avatar || "/placeholder.svg"} alt={caregiver.name} />
                          <AvatarFallback>
                            {caregiver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {caregiver.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                            <CheckCircle className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">{caregiver.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{caregiver.rating}</span>
                          <span className="text-sm text-muted-foreground">({caregiver.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{caregiver.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="md:col-span-2 space-y-4">
                      <p className="text-muted-foreground">{caregiver.bio}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-2">
                            {caregiver.specialties.map((specialty) => (
                              <Badge key={specialty} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{caregiver.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Languages className="h-4 w-4 text-muted-foreground" />
                            <span>{caregiver.languages.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span>{caregiver.certifications.join(", ")}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-muted-foreground" />
                            <span>Background Verified</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="md:col-span-1 space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">${caregiver.hourlyRate}</div>
                        <div className="text-sm text-muted-foreground">per hour</div>
                        <div className="mt-2">
                          <Badge variant={caregiver.available ? "default" : "secondary"}>
                            {caregiver.available ? "Available" : "Busy"}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button className="w-full" disabled={!caregiver.available}>
                          <Calendar className="h-4 w-4 mr-2" />
                          Book Now
                        </Button>
                        <Button variant="outline" className="w-full">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Message
                        </Button>
                        <Button variant="ghost" className="w-full">
                          <Heart className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCaregivers.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">No caregivers found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or expanding your location range.
                    </p>
                  </div>
                  <Button variant="outline">Clear Filters</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
