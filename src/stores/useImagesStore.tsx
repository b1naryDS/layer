import { create } from 'zustand';
import { PixabayImage, PixabayResponse } from '../common/types';

//env
const API_KEY = '26032813-5eca57a90774446a771ac3a81' ;
const BASE_URL = 'https://pixabay.com/api/';
const LIKED_IMAGES_KEY = 'likedImages';

interface ImagesState {
  images: PixabayImage[];
  likedImages: PixabayImage[];
  fetchImages: (
    query: string,
    ref: React.MutableRefObject<AbortController | undefined>
  ) => void;
  resetImages: () => void;
  likeImage: (image: PixabayImage) => void;
  unlikeImage: (image: PixabayImage) => void;
  isImageLiked: (imageId: number) => boolean;
}

export const useImagesStore = create<ImagesState>((set, get) => ({
  images: [],
  likedImages: JSON.parse(localStorage.getItem(LIKED_IMAGES_KEY) || '[]'),
  fetchImages: async (
    query: string,
    ref: React.MutableRefObject<AbortController | undefined>,
    page: number = 1,
    perPage: number = 20
  ) => {
    try {
      if (ref.current) {
        ref.current.abort();
      }
      const abortController = new AbortController();
      ref.current = abortController;

      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=${perPage}`,
        {
          signal: abortController.signal
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const data: PixabayResponse = await response.json();
      set({ images: data.hits });
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  },
  resetImages: () => {
    set(() => {
      return { images: [] };
    });
  },
  likeImage: (image: PixabayImage) => {
    set((state) => {
      const updatedLikedImages = [...state.likedImages, image];
      localStorage.setItem(
        LIKED_IMAGES_KEY,
        JSON.stringify(updatedLikedImages)
      );
      return { likedImages: updatedLikedImages };
    });
  },
  unlikeImage: (image: PixabayImage) => {
    set((state) => {
      const updatedLikedImages = state.likedImages.filter(
        (img) => img.id !== image.id
      );
      localStorage.setItem(
        LIKED_IMAGES_KEY,
        JSON.stringify(updatedLikedImages)
      );
      return { likedImages: updatedLikedImages };
    });
  },
  isImageLiked: (imageId: number) =>
    get().likedImages.some((image: PixabayImage) => image.id === imageId)
}));

export const useImageSelectors = () => {
  const likedImagesCount = useImagesStore((state) => state.likedImages.length);
  const likedImageIds = useImagesStore((state) =>
    state.likedImages.map((image) => image.id)
  );
  const getLikedImages = useImagesStore((state) => state.likedImages);

  return {
    getLikedImages,
    likedImagesCount,
    likedImageIds
  };
};
