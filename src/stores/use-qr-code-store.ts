import { create } from "zustand";
import { EXAMPLE_QR_CODE, type QrCode } from "@/types/qr-code";

interface QrCodeStore {
  qrCode: QrCode;
  setQrCode: (qrCode: QrCode) => void;
}

const useQrCodeStore = create<QrCodeStore>((set) => ({
  qrCode: EXAMPLE_QR_CODE,
  setQrCode: (qrCode: QrCode) => set({ qrCode }),
}));

export default useQrCodeStore;
