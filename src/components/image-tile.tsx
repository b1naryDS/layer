import { useMemo, useState } from 'react';
import { PixabayImage } from '../common/types';
import { ImageModal } from './image-modal';
import { ImageWithHover } from './image-with-hover';

export interface ImageProps {
  image: PixabayImage;
  isLiked: (imageId: number) => boolean;
  onLike: (image: PixabayImage) => void;
  onUnlike: (image: PixabayImage) => void;
}

export default function ImageTile({
  image,
  isLiked,
  onLike,
  onUnlike
}: ImageProps) {
  const [showModal, setShowModal] = useState(false);
  const aspect = useMemo(
    () => (image.webformatHeight / image.webformatWidth).toFixed(2),
    [image]
  );
  const { colSpan, rowSpan } = getImageSpan(parseFloat(aspect));

  const style = {
    gridColumnEnd: `span ${colSpan}`,
    gridRowEnd: `span ${rowSpan}`
  };
  return (
    <div className="grid-inline relative" key={image.id} style={style}>
      <ImageWithHover
        image={image}
        isLiked={isLiked}
        onLike={onLike}
        onUnlike={onUnlike}
        onExpand={() => setShowModal(true)}
      />
      {showModal && (
        <ImageModal
          image={image}
          isLiked={isLiked}
          onLike={onLike}
          onUnlike={onUnlike}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

const getImageSpan = (aspect: number) => {
  if (aspect < 0.6) {
    return { colSpan: 2, rowSpan: 1 };
  } else if (aspect < 0.9) {
    return { colSpan: 4, rowSpan: 3 };
  } else if (aspect < 1.1) {
    return { colSpan: 4, rowSpan: 4 };
  } else {
    return { colSpan: 2, rowSpan: 3 };
  }
};
