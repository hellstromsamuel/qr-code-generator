import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import { useRef } from "react";

function useDownloadHtmlAsPdf() {
  const htmlRef = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    const element = htmlRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, { scale: 2 });
      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      // 1. Set your padding (in mm)
      const padding = 10;

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // 2. Calculate the 'Safe Area' for content
      const safeAreaWidth = pdfWidth - 2 * padding;
      const safeAreaHeight = pdfHeight - 2 * padding;

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      // 3. Calculate ratio based on the SAFE AREA, not the full page
      const ratio = Math.min(
        safeAreaWidth / imgWidth,
        safeAreaHeight / imgHeight
      );

      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;

      // 4. Position the image
      // X: Center it horizontally
      const imgX = (pdfWidth - scaledWidth) / 2;

      // Y: Start at the top padding line (or center vertically if you prefer)
      const imgY = padding;

      pdf.addImage(imageData, "PNG", imgX, imgY, scaledWidth, scaledHeight);

      pdf.save("qr-code.pdf");
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  }

  return { htmlRef, handleDownload };
}

export default useDownloadHtmlAsPdf;
