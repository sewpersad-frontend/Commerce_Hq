import { ShoppingBag, Package, Mail, Calendar, MessageSquare, Users, Bot, Calculator, Bell } from "lucide-react";
import { Badge } from "./ui/badge";

interface TaskbarProps {
  onNotificationsClick: () => void;
}

export const Taskbar = ({ onNotificationsClick }: TaskbarProps) => {
  const apps = [
    { icon: ShoppingBag, label: "Shopify", badge: 3 },
    { icon: Package, label: "Printify", badge: 1 },
    { icon: Mail, label: "Gmail", badge: 12 },
    { icon: Calendar, label: "Calendar" },
    { icon: MessageSquare, label: "Teams", badge: 5 },
    { icon: Users, label: "WhatsApp", badge: 2 },
    { icon: Bot, label: "AI Copilot" },
    { icon: Calculator, label: "Accounting" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 glass-card border-t border-white/10 backdrop-blur-2xl z-50">
      <div className="h-full flex items-center justify-center gap-1 px-4">
        {/* Start Menu */}
        <button className="h-12 w-12 rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center justify-center group">
          <div className="w-6 h-6 grid grid-cols-2 gap-0.5">
            <div className="bg-gradient-primary rounded-sm group-hover:scale-110 transition-transform" />
            <div className="bg-gradient-primary rounded-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: '50ms' }} />
            <div className="bg-gradient-primary rounded-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: '100ms' }} />
            <div className="bg-gradient-primary rounded-sm group-hover:scale-110 transition-transform" style={{ transitionDelay: '150ms' }} />
          </div>
        </button>

        {/* Separator */}
        <div className="h-8 w-px bg-white/10 mx-2" />

        {/* App Icons */}
        <div className="flex items-center gap-1">
          {apps.map((app) => (
            <button
              key={app.label}
              className="relative h-12 w-12 rounded-xl hover:bg-white/10 transition-all duration-200 flex items-center justify-center group"
              title={app.label}
            >
              <app.icon className="w-5 h-5 text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-all" />
              {app.badge && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-destructive text-xs border-0">
                  {app.badge}
                </Badge>
              )}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* System Tray */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onNotificationsClick}
            className="relative h-10 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
          >
            <Bell className="w-4 h-4" />
            <Badge className="h-5 px-1.5 bg-destructive text-xs border-0">5</Badge>
          </button>

          <div className="h-10 px-3 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center gap-2 cursor-pointer">
            <div className="text-sm">
              <div className="font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</div>
            </div>
          </div>

          <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-sm font-semibold">U</span>
          </div>
        </div>
      </div>
    </div>
  );
};
