import { Card } from "@/components/ui/card"
import type { MenuItem } from "@/lib/menu-data"

interface MenuSectionProps {
  title: string
  items: MenuItem[]
  icon?: string
}

export function MenuSection({ title, items, icon }: MenuSectionProps) {
  return (
    <section className="scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, "-")}>
      <div className="flex items-center gap-3 mb-6">
        {icon && <span className="text-3xl">{icon}</span>}
        <h2 className="text-2xl md:text-3xl font-bold text-balance">{title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-sm leading-relaxed text-pretty">{item.name}</h3>
                {item.description && <p className="text-xs text-muted-foreground mt-1">{item.description}</p>}
              </div>
              <div className="text-right flex-shrink-0">
                {typeof item.price === "string" ? (
                  <span className="text-sm font-bold text-primary">{item.price}</span>
                ) : (
                  <div className="space-y-1">
                    {item.price.small && (
                      <div className="text-xs">
                        <span className="text-muted-foreground">S: </span>
                        <span className="font-semibold text-primary">{item.price.small}</span>
                      </div>
                    )}
                    {item.price.large && (
                      <div className="text-xs">
                        <span className="text-muted-foreground">L: </span>
                        <span className="font-semibold text-primary">{item.price.large}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
