import { ShoppingBag, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";

export const OrdersWidget = () => {
  const orders = [
    { id: "#ORD-2847", customer: "Sarah Johnson", amount: "$127.00", status: "processing", time: "2 min ago" },
    { id: "#ORD-2846", customer: "Mike Peters", amount: "$89.50", status: "shipped", time: "15 min ago" },
    { id: "#ORD-2845", customer: "Emma Wilson", amount: "$234.00", status: "delivered", time: "1 hour ago" },
    { id: "#ORD-2844", customer: "James Brown", amount: "$156.00", status: "processing", time: "2 hours ago" },
  ];

  const statusColors = {
    processing: "bg-yellow-500/20 text-yellow-500",
    shipped: "bg-blue-500/20 text-blue-500",
    delivered: "bg-green-500/20 text-green-500",
  };

  return (
    <div className="glass-card p-6 h-full hover-lift">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Recent Orders</h3>
        </div>
        <Badge className="bg-primary/20 text-primary border-0">
          <TrendingUp className="w-3 h-3 mr-1" />
          +12%
        </Badge>
      </div>

      <div className="space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="glass-card p-3 hover:bg-white/10 transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{order.id}</span>
              <span className="text-sm font-semibold">{order.amount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{order.customer}</span>
              <div className="flex items-center gap-2">
                <Badge className={`${statusColors[order.status as keyof typeof statusColors]} text-xs border-0`}>
                  {order.status}
                </Badge>
                <span className="text-xs text-muted-foreground">{order.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
