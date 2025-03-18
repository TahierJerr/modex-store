"use client"

import { useState } from "react"
import { Shield, ShieldCheck, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LocationCard } from "./location-card"
import { Sidebar } from "./sidebar"
import { useMobile } from "@/hooks/use-mobile"

// Mock data for VPN locations
const vpnLocations = [
  { id: 1, country: "United States (Virginia)", code: "us", ping: 110 },
  { id: 2, country: "UAE", code: "ae", ping: 90 },
  { id: 3, country: "Germany (Frankfurt)", code: "de", ping: 14 },
]

export function VpnDashboard() {
  const [activeLocationId, setActiveLocationId] = useState<number>(1)
  const [isConnected, setIsConnected] = useState<boolean>(true)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const isMobile = useMobile()

  const activeLocation = vpnLocations.find((location) => location.id === activeLocationId)

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  const handleLocationSelect = (id: number) => {
    setActiveLocationId(id)
    setIsConnected(true)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1">
        <header className="border-b border-border">
          <div className="flex items-center h-16 px-4">
            <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h1 className="text-xl font-semibold">VPN Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
              <div className="flex items-center gap-2">
                {isConnected ? (
                  <>
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">Protected</span>
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5 text-gray-400" />
                    <span className="text-sm font-medium">Not Protected</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">VPN Connection</h2>
                <p className="text-muted-foreground mt-1">
                  {isConnected ? `Connected to ${activeLocation?.country}` : "Not connected"}
                </p>
              </div>
              <Button
                className={cn(
                  "w-full md:w-auto",
                  isConnected ? "bg-black hover:bg-gray-800" : "bg-gray-200 text-black hover:bg-gray-300",
                )}
                onClick={handleConnect}
              >
                {isConnected ? "Disconnect" : "Connect"}
              </Button>
            </div>

            {activeLocation && (
              <div className="p-6 border border-border rounded-lg bg-background">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                    <span className="text-2xl">{getFlagEmoji(activeLocation.code)}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{activeLocation.country}</h3>
                    <p className="text-sm text-muted-foreground">Ping: {activeLocation.ping} ms</p>
                  </div>
                  <div className="ml-auto">
                    <div className={cn("w-3 h-3 rounded-full", isConnected ? "bg-green-500" : "bg-gray-300")} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">All Locations</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {vpnLocations.map((location) => (
                <LocationCard
                  key={location.id}
                  location={location}
                  isActive={location.id === activeLocationId && isConnected}
                  onClick={() => handleLocationSelect(location.id)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

// Helper function to convert country code to flag emoji
function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}