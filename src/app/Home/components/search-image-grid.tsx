import { ImageGrid } from '../../../components/image-grid';
import { useImagesStore } from '../../../stores/useImagesStore';

export default function SearchImageGrid() {
  const { images } = useImagesStore();
  return <ImageGrid images={images} />;
}
