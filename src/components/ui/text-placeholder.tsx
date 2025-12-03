import { cn } from "@/lib/utils";

function TextPlaceholder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("border border-dashed rounded-md", className)}>
      {children}
    </div>
  );
}

export default TextPlaceholder;
