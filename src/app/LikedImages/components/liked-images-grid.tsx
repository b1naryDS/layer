import { ImageGrid } from '../../../components/image-grid';
import { useImagesStore } from '../../../stores/useImagesStore';

export default function LikedImagesGrid() {
  const { likedImages } = useImagesStore();
  return <ImageGrid images={likedImages} />;
}
