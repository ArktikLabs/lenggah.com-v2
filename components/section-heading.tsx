import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  children,
  className,
  level = "h2",
}: SectionHeadingProps) {
  const baseClasses = "font-headings text-brand-light-teal/80 leading-tight";

  const sizeClasses = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl",
  };

  const Component = level;

  return (
    <Component className={cn(baseClasses, sizeClasses[level], className)}>
      {children}
    </Component>
  );
}
