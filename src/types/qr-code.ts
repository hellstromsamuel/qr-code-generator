export type QrCode = {
  title: string;
  description: string;
  url: string;
  logoUrl: string;
};

export const EXAMPLE_QR_CODE: QrCode = {
  title: "VG",
  description: "Read news on VG.no",
  url: "https://vg.no",
  logoUrl: "/vg-logo.svg",
};
