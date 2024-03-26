import React, { useMemo, useState } from 'react';
import { ImageProps } from './image-tile';
import { ImageHoverOverlay } from './image-hover-overlay';
import { ExpandIcon } from './icons/expand-icon';

export const ImageWithHover: React.FC<
  ImageProps & { onExpand?: () => void; full?: boolean }
> = ({ image, isLiked, onLike, onUnlike, onExpand, full }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const imageSrcSet = useMemo(
    () => generateSrcSet(image.webformatURL),
    [image]
  );

  return (
    <div
      className="inline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {full ? (
        <img
          key={image.id}
          style={{
            height: image.webformatHeight,
            width: image.webformatWidth
          }}
          className="w-full  object-contain rounded-lg"
          src={image.largeImageURL}
          alt={image.tags}
        />
      ) : (
        <picture className="inline">
          {imageSrcSet.map(({ imgSrc, media }, index) => {
            return <source key={index} media={media} srcSet={imgSrc} />;
          })}
          <img
            className="w-full h-full object-cover rounded-lg"
            srcSet={image.webformatURL}
            alt={image.tags}
          />
        </picture>
      )}
      {isHovered && (
        <>
          <ImageHoverOverlay
            image={image}
            isLiked={isLiked}
            onLike={onLike}
            onUnlike={onUnlike}
          />
          {onExpand && ExpandButton(onExpand)}
        </>
      )}
    </div>
  );
};
const generateSrcSet = (
  webformatURL: string
): { imgSrc: string; media: string }[] => {
  const urlParts = webformatURL.split('_');
  const baseUrl = urlParts.slice(0, -1).join('_');
  const extension = urlParts[urlParts.length - 1].split('.').pop();
  const sizes = [
    { size: 640, width: 340 },
    { size: 340, width: 180 },
    { size: 180, width: 1 }
  ];

  const srcSet = sizes.map(({ size, width }) => {
    return {
      imgSrc: `${baseUrl}_${size}.${extension}`,
      media: `(min-width: ${width}px)`
    };
  });

  return srcSet;
};

function ExpandButton(onExpand: () => void) {
  return (
    <button
      className=" absolute top-0 right-0 cursor-pointer stroke-white"
      onClick={onExpand}
    >
      <ExpandIcon />
    </button>
  );
}
