import { ArrowRight, CheckCircle2, Package, Printer, Send, Mail } from "lucide-react";

export const WorkflowPanel = () => {
  const steps = [
    { icon: Package, label: "Order Received", status: "complete", color: "text-green-500" },
    { icon: Printer, label: "Label Printed", status: "complete", color: "text-green-500" },
    { icon: CheckCircle2, label: "Stock Updated", status: "active", color: "text-primary" },
    { icon: Send, label: "Shipment", status: "pending", color: "text-muted-foreground" },
    { icon: Mail, label: "Customer Notified", status: "pending", color: "text-muted-foreground" },
  ];

  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Automated Workflow</h3>
        <span className="text-sm text-muted-foreground">3/5 steps completed</span>
      </div>

      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center gap-2">
              <div className={`glass-card p-4 ${step.status === 'active' ? 'animate-glow-pulse bg-primary/20' : ''} ${step.status === 'complete' ? 'bg-green-500/20' : ''}`}>
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </div>
              <span className={`text-xs text-center max-w-[80px] ${step.color}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <ArrowRight className={`w-6 h-6 mx-4 ${step.status === 'complete' ? 'text-green-500' : 'text-muted-foreground'}`} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 glass-card p-4 bg-primary/10 border-primary/30">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium mb-1">Workflow Running Smoothly</p>
            <p className="text-xs text-muted-foreground">
              18 orders processed automatically in the last hour. Avg. processing time: 3.2 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
