import { Clock, Bike, CreditCard, Smartphone } from "lucide-react"
import { Card } from "@/components/ui/card"

export function DeliveryInfo() {
  return (
    <div className="bg-primary/5 py-8 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 flex items-start gap-3 bg-card">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Working Hours</h3>
              <p className="text-xs text-muted-foreground mt-1">2:00 PM - 3:00 AM</p>
            </div>
          </Card>

          <Card className="p-4 flex items-start gap-3 bg-card">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Bike className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Delivery</h3>
              <p className="text-xs text-muted-foreground mt-1">RM10 minimum • Free for schools</p>
            </div>
          </Card>

          <Card className="p-4 flex items-start gap-3 bg-card">
            <div className="bg-primary/10 p-2 rounded-lg">
              <CreditCard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Payment</h3>
              <p className="text-xs text-muted-foreground mt-1">Cash on delivery</p>
            </div>
          </Card>

          <Card className="p-4 flex items-start gap-3 bg-card">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Online Payment</h3>
              <p className="text-xs text-muted-foreground mt-1">QRPay • TNGpay</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
