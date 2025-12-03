import { Trash } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLogoUpload } from "@/hooks/use-logo-upload";

export function LogoUploadField() {
  const { logoUrl, fileInputRef, handleLogoUpload, handleRemoveLogo } =
    useLogoUpload();

  return (
    <div className="flex items-start gap-4">
      {!logoUrl && (
        <div className="flex-1">
          <Input
            id="logo"
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/svg+xml"
            onChange={handleLogoUpload}
            ref={fileInputRef}
            className="cursor-pointer file:text-primary h-16 hover:bg-accent hover:text-accent-foreground"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Supported formats: PNG, JPG, JPEG, SVG
          </p>
        </div>
      )}

      {logoUrl && (
        <div className="flex justify-between items-center w-full h-20 px-4 border rounded-lg">
          <div className="size-16">
            <img
              src={logoUrl}
              alt="Logo preview"
              className="w-full h-full object-contain"
            />
          </div>

          <Button
            type="button"
            variant="outline"
            tooltip="Remove logo"
            className="text-destructive hover:text-destructive"
            onClick={handleRemoveLogo}
          >
            <Trash className="size-4" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}
