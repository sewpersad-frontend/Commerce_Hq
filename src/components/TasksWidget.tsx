import { CheckCircle2, Circle, Clock } from "lucide-react";

export const TasksWidget = () => {
  const tasks = [
    { id: 1, title: "Process pending shipments", completed: false, priority: "high", time: "Due today" },
    { id: 2, title: "Update inventory levels", completed: false, priority: "medium", time: "Due today" },
    { id: 3, title: "Review customer feedback", completed: true, priority: "low", time: "Completed" },
    { id: 4, title: "Send marketing emails", completed: false, priority: "medium", time: "Tomorrow" },
    { id: 5, title: "Reconcile payments", completed: true, priority: "high", time: "Completed" },
  ];

  const priorityColors = {
    high: "text-destructive",
    medium: "text-yellow-500",
    low: "text-accent",
  };

  return (
    <div className="glass-card p-6 h-full hover-lift">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-accent" />
          <h3 className="text-lg font-semibold">Tasks</h3>
        </div>
        <span className="text-sm text-muted-foreground">3 pending</span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3 group">
            <button className="mt-0.5 flex-shrink-0">
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-accent" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <p className={`text-sm mb-1 ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                {task.title}
              </p>
              <div className="flex items-center gap-2">
                <span className={`text-xs ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                  {task.priority}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {task.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
