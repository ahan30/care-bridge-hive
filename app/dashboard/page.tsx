"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  Heart,
  MessageCircle,
  Phone,
  Star,
  Users,
  DollarSign,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function DashboardPage() {
  const [userRole] = useState("family") // This would come from auth context

  const stats = [
    {
      title: "Active Caregivers",
      value: "3",
      change: "+1 this month",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Hours This Month",
      value: "124",
      change: "+12% from last month",
      icon: Clock,
      color: "text-green-600",
    },
    {
      title: "Total Spent",
      value: "$2,480",
      change: "Within budget",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      title: "Satisfaction",
      value: "4.9★",
      change: "Excellent rating",
      icon: Star,
      color: "text-yellow-600",
    },
  ]

  const upcomingAppointments = [
    {
      id: 1,
      caregiver: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      service: "Companion Care",
      date: "Today",
      time: "2:00 PM - 6:00 PM",
      status: "confirmed",
    },
    {
      id: 2,
      caregiver: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      service: "Medical Care",
      date: "Tomorrow",
      time: "9:00 AM - 1:00 PM",
      status: "confirmed",
    },
    {
      id: 3,
      caregiver: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      service: "Housekeeping",
      date: "Friday",
      time: "10:00 AM - 2:00 PM",
      status: "pending",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "booking",
      message: "New booking confirmed with Sarah Johnson",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "message",
      message: "Message from Michael Chen",
      time: "4 hours ago",
      icon: MessageCircle,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "payment",
      message: "Payment processed for last week",
      time: "1 day ago",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      id: 4,
      type: "alert",
      message: "Background check completed for new caregiver",
      time: "2 days ago",
      icon: AlertCircle,
      color: "text-orange-600",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, John!</h1>
            <p className="text-muted-foreground">Here's what's happening with your care today.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <MessageCircle className="h-4 w-4 mr-2" />
              AI Assistant
            </Button>
            <Button variant="destructive">
              <Phone className="h-4 w-4 mr-2" />
              Emergency
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Appointments
              </CardTitle>
              <CardDescription>Your scheduled care sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={appointment.avatar || "/placeholder.svg"} alt={appointment.caregiver} />
                      <AvatarFallback>
                        {appointment.caregiver
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{appointment.caregiver}</p>
                      <p className="text-sm text-muted-foreground">{appointment.service}</p>
                      <p className="text-sm text-muted-foreground">
                        {appointment.date} • {appointment.time}
                      </p>
                    </div>
                  </div>
                  <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"}>
                    {appointment.status}
                  </Badge>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View All Appointments
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest updates and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View All Activity
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex-col gap-2" variant="outline">
                <Users className="h-6 w-6" />
                <span className="text-sm">Find Caregivers</span>
              </Button>
              <Button className="h-20 flex-col gap-2" variant="outline">
                <Calendar className="h-6 w-6" />
                <span className="text-sm">Book Service</span>
              </Button>
              <Button className="h-20 flex-col gap-2" variant="outline">
                <MessageCircle className="h-6 w-6" />
                <span className="text-sm">Send Message</span>
              </Button>
              <Button className="h-20 flex-col gap-2" variant="outline">
                <Heart className="h-6 w-6" />
                <span className="text-sm">Care Shop</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
