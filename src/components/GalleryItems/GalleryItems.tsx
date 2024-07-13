
import "../Gallery/Gallery.css";

type TGalleryItemProps = {
  src: string;
  index: number;
};

const GalleryItems: React.FC<TGalleryItemProps> = ({ src }) => {
  return (
  <div className="gallery-item">

   <img
        src={src}
        className="images"
      />
  </div>

  
  );
};

export default GalleryItems;
