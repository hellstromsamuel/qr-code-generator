import { Input } from "./ui/input";
import { Button } from "./ui/button";
import useQrCodeStore from "@/stores/use-qr-code-store";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Edit, RefreshCw } from "lucide-react";
import { EXAMPLE_QR_CODE } from "@/types/qr-code";

function QrCodeForm() {
  const { qrCode, setQrCode } = useQrCodeStore();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log("form submitted", qrCode);

    // TODO: Add save input submit handler later
  }

  function resetForm() {
    setQrCode({
      title: "",
      description: "",
      url: "",
      logoUrl: "",
    });
  }

  function useExample() {
    setQrCode(EXAMPLE_QR_CODE);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-2">
        <Button type="button" variant="outline" onClick={useExample}>
          <Edit />
          Use example
        </Button>
        <Button type="button" variant="outline" onClick={resetForm}>
          <RefreshCw />
          Reset
        </Button>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          required
          id="title"
          type="text"
          placeholder="Enter a title for the QR code"
          value={qrCode.title}
          onChange={(e) => setQrCode({ ...qrCode, title: e.target.value })}
        />
        <p className="text-sm text-muted-foreground">{`For example: ${EXAMPLE_QR_CODE.title}`}</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          required
          id="description"
          placeholder="Tell people what to do when they scan the QR code"
          value={qrCode.description}
          onChange={(e) =>
            setQrCode({ ...qrCode, description: e.target.value })
          }
        />
        <p className="text-sm text-muted-foreground">{`For example: ${EXAMPLE_QR_CODE.description}`}</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="url">Link</Label>
        <Input
          required
          id="url"
          type="url"
          placeholder="Enter the URL for the QR code"
          value={qrCode.url}
          onChange={(e) => setQrCode({ ...qrCode, url: e.target.value })}
        />
        <p className="text-sm text-muted-foreground">{`For example: ${EXAMPLE_QR_CODE.url}`}</p>
      </div>

      {/* TODO: Add save input button later */}
      {/* <Button type="submit">
        <Check />
        Save input
      </Button> */}
    </form>
  );
}

export default QrCodeForm;
