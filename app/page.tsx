import { MenuSection } from "@/components/menu-section"
import { DeliveryInfo } from "@/components/delivery-info"
import { Header } from "@/components/header"
import { menuData } from "@/lib/menu-data"
import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <DeliveryInfo />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="space-y-16">
          {menuData.map((section) => (
            <MenuSection key={section.id} title={section.title} items={section.items} icon={section.icon} />
          ))}
        </div>
      </div>

      <footer className="bg-accent text-accent-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 GB Khan Home Food - HAMDAH IBRAHIM SDN.BHD.</p>
          <p className="text-xs mt-2 opacity-80">200701032935 (790963-A)</p>
        </div>
      </footer>

      <a
        href="https://wa.me/60176302757"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </main>
  )
}
