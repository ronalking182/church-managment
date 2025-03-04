import Link from "next/link"
import { Music, Calendar, Users, MessageSquare, Wallet, Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Music className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Choir Portal</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign up</Button>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Harmonize Your Choir Management
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline rehearsals, performances, and communication with our all-in-one platform designed
                    specifically for choirs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      View Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center mt-8 lg:mt-0">
                <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] rounded-xl overflow-hidden border shadow-xl">
                      <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        <div className="text-center space-y-4 p-4">
                          <Music className="h-14 w-14 mx-auto text-primary" />
                          <h3 className="text-xl font-medium">Choir Portal Dashboard</h3>
                          <p className="text-sm text-muted-foreground max-w-[250px] mx-auto">
                            Manage your choir with ease using our intuitive dashboard
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Features Designed for Choirs
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your choir effectively in one place
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Music Library</h3>
                <p className="text-center text-muted-foreground">
                  Access sheet music, recordings, and practice files in one organized place
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Scheduling</h3>
                <p className="text-center text-muted-foreground">
                  Manage rehearsals and performances with an interactive calendar
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Attendance</h3>
                <p className="text-center text-muted-foreground">
                  Track attendance for rehearsals and performances with detailed reports
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Communication</h3>
                <p className="text-center text-muted-foreground">
                  Send announcements and facilitate discussions between members
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Financial Management</h3>
                <p className="text-center text-muted-foreground">
                  Track dues, donations, and expenses with financial reporting
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Role-Based Access</h3>
                <p className="text-center text-muted-foreground">
                  Customize permissions for directors, administrators, and members
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Choir Management?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of choirs already using our platform to streamline their operations
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    Sign Up Now
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-2 items-center">
            <Music className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 Choir Portal. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Privacy
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

