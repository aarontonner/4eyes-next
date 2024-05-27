import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import { useEffect } from "react";

const ImageLightbox = ({ isOpen, setIsOpen, images, index }) => {
  const data = images?.map((item) => {
    return {
      src: item?.sourceUrl,
      alt: item?.altText,
    };
  });
  return (
    <Lightbox
      open={isOpen}
      index={index}
      close={() => setIsOpen(false)}
      slides={data}
      plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
    />
  );
};

export default ImageLightbox;
