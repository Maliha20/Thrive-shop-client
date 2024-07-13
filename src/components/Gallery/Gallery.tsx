/* eslint-disable @typescript-eslint/no-explicit-any */
import { data } from "../data/GalleryImages";
import GalleryItems from "../GalleryItems/GalleryItems";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="">
      <SectionTitle title="Gallery" />
      <div className="container mx-auto my-12">
        <div className="gallery">
          {data.map((image, index) => (
            <GalleryItems key={image.id} src={image.src} index={index} />
          ))}
        </div>
      </div>
    </section>
  );

  }
export default Gallery;