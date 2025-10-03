import { Calendar, Clock } from "lucide-react";

export const CalendarWidget = () => {
  const events = [
    { time: "09:00 AM", title: "Team Standup", color: "bg-primary" },
    { time: "11:30 AM", title: "Supplier Meeting", color: "bg-accent" },
    { time: "02:00 PM", title: "Inventory Review", color: "bg-yellow-500" },
    { time: "04:30 PM", title: "Marketing Call", color: "bg-green-500" },
  ];

  const today = new Date();
  const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
  const monthDay = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Today's Schedule</h3>
      </div>

      <div className="mb-6">
        <div className="text-3xl font-bold mb-1">{today.getDate()}</div>
        <div className="text-sm text-muted-foreground">{dayName}</div>
        <div className="text-sm text-muted-foreground">{monthDay}</div>
      </div>

      <div className="space-y-3">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-3 glass-card p-3 hover:bg-white/10 transition-all duration-200">
            <div className={`w-1 h-full ${event.color} rounded-full flex-shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{event.time}</span>
              </div>
              <p className="text-sm font-medium">{event.title}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 glass-button text-sm font-medium">
        View Full Calendar
      </button>
    </div>
  );
};
