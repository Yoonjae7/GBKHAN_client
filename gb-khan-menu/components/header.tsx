import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/logo.png"
            alt="GB Khan Home Food"
            width={200}
            height={200}
            className="w-32 h-32 md:w-40 md:h-40 object-contain"
            priority
          />
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">GB Khan Home Food</h1>
            <p className="text-sm text-muted-foreground mt-1">Authentic Pakistani Cuisine</p>
            <p className="text-xs text-muted-foreground/70 mt-2 italic">Made with care by a Student at University of Nottingham for Khan</p>
          </div>
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BA5A] text-white gap-2">
            <a href="https://wa.me/60176302757" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Order on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
