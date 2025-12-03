import QrCodeForm from "./components/qr-code-form";
import QrCodePreview from "./components/qr-code-preview";

function App() {
  return (
    <main className="flex flex-col h-screen max-w-5xl mx-auto gap-8 p-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">QR Code Generator</h1>

      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16">
        <section className="text-left space-y-4">
          <h2 className="text-lg font-semibold">Form</h2>
          <QrCodeForm />
        </section>

        <section className="text-left space-y-4">
          <h2 className="text-lg font-semibold">Preview</h2>
          <div className="border rounded-2xl p-4 w-full overflow-hidden">
            <QrCodePreview />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
