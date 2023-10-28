import Screenshot from "@/core/domain/models/games/Screenshots";
import Image from "next/image";
import { DialogContainer } from "./DialogContainer";

interface ScreenshotCardProps {
  screenshot: Screenshot;
}

const ScreenshotCard = ({ screenshot }: ScreenshotCardProps) => {
  return (
    <DialogContainer>
      <Image
        src={screenshot.image}
        alt={`screenshot ${screenshot.id}`}
        width={3000}
        height={3000}
        className="h-full w-full object-cover rounded-lg border-2 border-dark-800"
      />
    </DialogContainer>
  );
};

export { ScreenshotCard };
