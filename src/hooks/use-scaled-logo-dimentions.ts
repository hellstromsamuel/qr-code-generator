import { useEffect, useState } from "react";

function useScaledLogoDimensions(
  url: string | undefined | null,
  containerSize: number,
  ratio = 0.2
) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!url || !containerSize) {
      setDimensions({ width: 0, height: 0 });
      return;
    }

    const img = new Image();
    img.src = url;
    img.onload = () => {
      const aspect = img.naturalWidth / img.naturalHeight;
      const maxSize = containerSize * ratio;

      let width = maxSize;
      let height = maxSize;

      if (aspect > 1) {
        width = maxSize;
        height = maxSize / aspect;
      } else {
        // Portrait
        height = maxSize;
        width = maxSize * aspect;
      }

      setDimensions({ width, height });
    };
  }, [url, containerSize, ratio]);

  return dimensions;
}

export default useScaledLogoDimensions;
