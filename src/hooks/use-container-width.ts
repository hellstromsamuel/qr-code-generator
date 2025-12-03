import { useEffect, useRef, useState } from "react";

function useContainerWidth(paddingX = 0) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth - paddingX * 2);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [paddingX]);

  return { containerRef, width };
}

export default useContainerWidth;
