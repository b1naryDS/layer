import React from 'react';
import { ImageProps } from './image-tile';
import { PixabayImage } from '../common/types';
import { UnlikeIcon } from './icons/unlike-icon';
import { LikeIcon } from './icons/like-icon';

export const ImageHoverOverlay: React.FC<ImageProps> = ({
  image,
  isLiked,
  onLike,
  onUnlike
}) => {
  const isImageLiked = isLiked(image.id);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
      {isImageLiked ? UnlikeButton(onUnlike, image) : LikeButton(onLike, image)}
    </div>
  );
};

function LikeButton(
  onLike: (image: PixabayImage) => void,
  image: PixabayImage
): React.ReactNode {
  return (
    <button onClick={() => onLike(image)}>
      <LikeIcon />
    </button>
  );
}

function UnlikeButton(
  onUnlike: (
    image: import('/home/davor/WebstormProjects/job/layer/src/common/types').PixabayImage
  ) => void,
  image: PixabayImage
): React.ReactNode {
  return (
    <button onClick={() => onUnlike(image)}>
      <UnlikeIcon />
    </button>
  );
}
