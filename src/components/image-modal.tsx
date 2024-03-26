import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ImageProps } from './image-tile';
import { ImageWithHover } from './image-with-hover';
import { CloseIcon } from './icons/close-icon';

export const ImageModal: React.FC<ImageProps & { onClose: () => void }> = (
  props
) => {
  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        props.onClose();
      }
    };
    window.addEventListener('keydown', handleEscPress);
    return () => window.removeEventListener('keydown', handleEscPress);
  });
  return createPortal(
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-4xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <div className="flex justify-end w-full">
                <button className=" " type="button" onClick={props.onClose}>
                  <CloseIcon />
                </button>
              </div>
              <ImageWithHover {...props} full={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>,
    document.body
  );
};
