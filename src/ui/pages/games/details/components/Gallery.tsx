import { useFetchScreenshots } from "@/ui/hooks/use-games";
import { ScreenshotCard } from "./ScreenshotCard";
import styles from "./Gallery.module.scss";

interface GalleryProps {
  gameID: string;
}

const Gallery = async ({ gameID }: GalleryProps) => {
  const screenshots = await useFetchScreenshots(gameID);

  if (!screenshots || screenshots.length === 0) return null;

  const screenshotList = screenshots.map((screenshot) => (
    <ScreenshotCard key={screenshot.id} screenshot={screenshot} />
  ));

  return (
    <div className="w-full h-full bg-gradient-to-t from-[#000000] to-transparent absolute bottom-0 left-0 flex items-end p-4">
      <div
        className={`w-full h-full flex flex-row items-end gap-4 overflow-x-auto pb-4 ${styles.scroll}`}
      >
        {screenshotList}
      </div>
    </div>
  );
};

export { Gallery };
