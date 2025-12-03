import useQrCodeStore from "@/stores/use-qr-code-store";
import QRCode from "react-qrcode-logo";
import { isValidUrl } from "@/utils/url";
import TextPlaceholder from "./ui/text-placeholder";
import useContainerWidth from "@/hooks/use-container-width";
import useScaledLogoDimensions from "@/hooks/use-scaled-logo-dimentions";
import useTailwindBreakpoint from "@/hooks/use-tailwind-breakpoint";

function QrCodePreview() {
  const { qrCode } = useQrCodeStore();
  const { title, description, url, logoUrl } = qrCode;

  const breakpoint = useTailwindBreakpoint();
  const paddingX = breakpoint === "sm" ? 16 : 8;

  const { containerRef, width: qrCodeSize } = useContainerWidth(paddingX);
  const { width: logoWidth, height: logoHeight } = useScaledLogoDimensions(
    logoUrl,
    qrCodeSize
  );

  return (
    <div className="flex flex-col gap-4 text-center aspect-[210/297] w-full max-w-full">
      <div className="space-y-2">
        <div className="font-semibold text-4xl">
          {title ? (
            <h3 className="py-1">{title}</h3>
          ) : (
            <TextPlaceholder className="py-1">[Title]</TextPlaceholder>
          )}
        </div>

        <div className="text-xl">
          {description ? (
            <p className="py-1">{description}</p>
          ) : (
            <TextPlaceholder className="py-1">[Description]</TextPlaceholder>
          )}
        </div>
      </div>

      <div className="aspect-square" ref={containerRef}>
        {isValidUrl(url) ? (
          <QRCode
            value={url}
            size={qrCodeSize}
            logoImage={logoUrl}
            logoWidth={logoWidth}
            logoHeight={logoHeight}
            removeQrCodeBehindLogo
          />
        ) : (
          <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
            <p>QR code will be displayed here</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QrCodePreview;
