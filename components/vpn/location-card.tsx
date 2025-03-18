"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Location {
  id: number
  country: string
  code: string
  ping: number
}

interface LocationCardProps {
  location: Location
  isActive: boolean
  onClick: () => void
}

export function LocationCard({ location, isActive, onClick }: LocationCardProps) {
  return (
    <div
      className={cn(
        "p-4 border rounded-lg transition-colors",
        isActive ? "border-black bg-gray-50" : "border-border bg-background hover:border-gray-400",
      )}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
          <span className="text-xl">{getFlagEmoji(location.code)}</span>
        </div>
        <div>
          <h3 className="font-medium">{location.country}</h3>
          <p className="text-xs text-muted-foreground">Ping: {location.ping} ms</p>
        </div>
        <div className="ml-auto">
          <div className={cn("w-2 h-2 rounded-full", isActive ? "bg-green-500" : "bg-gray-300")} />
        </div>
      </div>
      <Button
        variant={isActive ? "default" : "outline"}
        size="sm"
        className={cn("w-full", isActive && "bg-black hover:bg-gray-800")}
        onClick={onClick}
      >
        {isActive ? "Connected" : "Connect"}
      </Button>
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