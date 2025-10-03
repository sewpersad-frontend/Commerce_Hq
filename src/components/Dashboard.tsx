import { useState } from "react";
import { Taskbar } from "./Taskbar";
import { OverviewPanel } from "./OverviewPanel";
import { OrdersWidget } from "./OrdersWidgets";
import { TasksWidget } from "./TasksWidget";
import { CalendarWidget } from "./CalendarWidget";
import { WorkflowPanel } from "./WorkflowPanel";
import { NotificationCenter } from "./NotificationCenter";

export const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#141632] to-[#1a1240] relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float animate-delay-1s" />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col">
        {/* Dashboard Content Area */}
        <main className="flex-1 overflow-auto p-6 pb-20">
          <div className="max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl font-bold mb-2 gradient-text">Good morning, User</h1>
              <p className="text-muted-foreground text-lg">Here's what's happening with your workflow today</p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Overview */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                <div className="animate-slide-up">
                  <OverviewPanel />
                </div>
                
                <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <WorkflowPanel />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <OrdersWidget />
                  </div>
                  <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <TasksWidget />
                  </div>
                </div>
              </div>

              {/* Right Column - Calendar & Quick Actions */}
              <div className="col-span-12 lg:col-span-4 space-y-6">
                <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <CalendarWidget />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Taskbar */}
        <Taskbar onNotificationsClick={() => setShowNotifications(!showNotifications)} />
      </div>

      {/* Notification Center */}
      <NotificationCenter isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
    </div>
  );
};
