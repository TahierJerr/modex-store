import { Home, Shield, Settings, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface SidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">SecureVPN</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start font-semibold" asChild>
              <a href="#">
                <Shield className="mr-2 h-4 w-4" />
                VPN Locations
              </a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </a>
            </Button>
          </li>
          <li>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <a href="#">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </a>
            </Button>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-gray-500">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="p-0 w-64">
          {sidebarContent}
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 border-r bg-background">{sidebarContent}</div>
    </>
  )
}