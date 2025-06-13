import { Metadata } from "next"
import AnalyticsDashboard from "@/components/dashboard/analytics-dashboard"
import { getDictionary } from "../dictionaries"

export const metadata: Metadata = {
  title: "Dashboard | Analytics",
  description: "View your portfolio analytics and performance metrics",
}

// This would be replaced with actual API calls in production
const mockAnalyticsData = {
  pageViews: 12345,
  uniqueVisitors: 5432,
  bounceRate: 45.2,
  averageTimeOnSite: 3.5,
  topPages: [
    { path: "/", views: 5000 },
    { path: "/about", views: 3000 },
    { path: "/projects", views: 2500 },
    { path: "/blog", views: 1500 },
  ],
  topReferrers: [
    { source: "Google", count: 3000 },
    { source: "Direct", count: 2000 },
    { source: "Twitter", count: 1000 },
    { source: "GitHub", count: 500 },
  ],
  deviceTypes: [
    { type: "Desktop", count: 4000 },
    { type: "Mobile", count: 3000 },
    { type: "Tablet", count: 1000 },
  ],
  countries: [
    { country: "US", count: 3000 },
    { country: "UK", count: 1500 },
    { country: "Germany", count: 1000 },
    { country: "France", count: 800 },
  ],
}

export default async function DashboardPage({
  params: { lang },
}: {
  params: { lang: string }
}) {
  const dict = await getDictionary(lang)

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-muted-foreground">Monitor your portfolio performance</p>
      </div>

      <AnalyticsDashboard data={mockAnalyticsData} />
    </div>
  )
} 