import { useEffect, useState } from "react";

/*
Tailwind width breakpoints:

sm	40rem (640px)	@media (width >= 40rem) { ... }
md	48rem (768px)	@media (width >= 48rem) { ... }
lg	64rem (1024px)	@media (width >= 64rem) { ... }
xl	80rem (1280px)	@media (width >= 80rem) { ... }
2xl	96rem (1536px)	@media (width >= 96rem) { ... }
*/

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

function useTailwindBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const updateBreakpoint = () => {
      const breakpoint =
        window.innerWidth < 640
          ? "sm"
          : window.innerWidth < 768
          ? "md"
          : window.innerWidth < 1024
          ? "lg"
          : window.innerWidth < 1280
          ? "xl"
          : "2xl";
      setBreakpoint(breakpoint);
    };

    updateBreakpoint();

    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
}

export default useTailwindBreakpoint;
