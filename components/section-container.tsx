import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "secondary" | "teal" | "orange" | "sand";
  id?: string;
}

export function SectionContainer({
  children,
  className,
  background = "white",
  id,
}: SectionContainerProps) {
  const bgClasses = {
    white: "bg-white",
    secondary: "bg-secondary",
    teal: "bg-brand-teal",
    orange: "bg-brand-orange",
    sand: "bg-brand-sand",
  };

  return (
    <section id={id} className={cn(bgClasses[background], "py-12 md:py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  );
}
