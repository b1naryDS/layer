import { useImagesStore } from '../stores/useImagesStore';
import { PixabayImage } from '../common/types';
import ImageTile from './image-tile';

interface ImageGridProps {
  images: PixabayImage[];
}
export const ImageGrid = ({ images }: ImageGridProps) => {
  const { isImageLiked,likeImage, unlikeImage } = useImagesStore();
  return (
    <div className="mx-auto grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-flow-dense gap-4 auto-rows-max max-w-6xl">
      {images.map((image) => (
        <ImageTile
          key={image.id}
          isLiked={isImageLiked}
          onLike={likeImage}
          onUnlike={unlikeImage}
          image={image}
        />
      ))}
    </div>
  );
};
