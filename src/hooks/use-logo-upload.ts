import { useRef } from "react";
import type { ChangeEvent } from "react";
import useQrCodeStore from "@/stores/use-qr-code-store";

export function useLogoUpload() {
  const { qrCode, setQrCode } = useQrCodeStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      setQrCode({ ...qrCode, logoUrl: result });
    };

    reader.readAsDataURL(file);
  };

  const handleRemoveLogo = () => {
    setQrCode({ ...qrCode, logoUrl: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return {
    logoUrl: qrCode.logoUrl,
    fileInputRef,
    handleLogoUpload,
    handleRemoveLogo,
  };
}
