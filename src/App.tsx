import { Download } from "lucide-react";
import QrCodeForm from "./components/qr-code-form";
import QrCodePreview from "./components/qr-code-preview";
import { Button } from "./components/ui/button";
import useDownloadHtmlAsPdf from "./hooks/use-download-html-as-pdf";

function App() {
  const { htmlRef, handleDownload } = useDownloadHtmlAsPdf();

  return (
    <main className="flex flex-col h-screen max-w-5xl mx-auto gap-8 p-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">QR Code Generator</h1>

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
        <section className="text-left space-y-4">
          <h2 className="text-xl font-semibold">Form</h2>
          <QrCodeForm />
        </section>

        <section className="text-left space-y-4">
          <h2 className="text-xl font-semibold">Preview</h2>

          <Button
            type="button"
            variant="default"
            tooltip="Download QR code as PDF"
            onClick={handleDownload}
          >
            <Download />
            Download PDF
          </Button>

          <div className="border rounded-sm p-4 w-full overflow-hidden">
            <QrCodePreview htmlRef={htmlRef} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
