import { TrendingUp, Package, CheckCircle2, Clock } from "lucide-react";

export const OverviewPanel = () => {
  const stats = [
    { label: "Today's Orders", value: "24", change: "+12%", icon: Package, color: "text-primary" },
    { label: "Processed", value: "18", change: "+8%", icon: CheckCircle2, color: "text-accent" },
    { label: "Pending", value: "6", change: "-3%", icon: Clock, color: "text-yellow-500" },
    { label: "Revenue", value: "$2,847", change: "+23%", icon: TrendingUp, color: "text-green-500" },
  ];

  return (
    <div className="glass-card p-6 hover-lift">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span className="gradient-text">Today's Overview</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-yellow-500'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
