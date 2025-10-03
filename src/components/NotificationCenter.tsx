import { X, Package, Mail, AlertCircle, CheckCircle2 } from "lucide-react";

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationCenter = ({ isOpen, onClose }: NotificationCenterProps) => {
  const notifications = [
    { id: 1, icon: Package, title: "New order received", message: "Order #2847 from Sarah Johnson", time: "2 min ago", type: "info" },
    { id: 2, icon: CheckCircle2, title: "Shipment delivered", message: "Order #2840 delivered successfully", time: "15 min ago", type: "success" },
    { id: 3, icon: AlertCircle, title: "Low stock alert", message: "Product A-123 is running low", time: "1 hour ago", type: "warning" },
    { id: 4, icon: Mail, title: "New message", message: "Customer inquiry about order #2835", time: "2 hours ago", type: "info" },
    { id: 5, icon: Package, title: "Order shipped", message: "Order #2846 is on its way", time: "3 hours ago", type: "success" },
  ];

  const typeColors = {
    info: "text-primary",
    success: "text-green-500",
    warning: "text-yellow-500",
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Notification Panel */}
      <div className="fixed right-4 top-4 bottom-20 w-96 glass-card z-50 animate-slide-up overflow-hidden flex flex-col">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <button 
            onClick={onClose}
            className="h-8 w-8 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center justify-center"
            title="Close notification center"
            aria-label="Close notification center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.map((notification) => (
            <div 
              key={notification.id} 
              className="glass-card p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <notification.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${typeColors[notification.type as keyof typeof typeColors]}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium mb-1">{notification.title}</p>
                  <p className="text-xs text-muted-foreground mb-2">{notification.message}</p>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="w-full glass-button text-sm font-medium">
            Mark all as read
          </button>
        </div>
      </div>
    </>
  );
};
