import Header from '../../components/header';
import LikedImagesLink from './components/liked-images-link';
import { ImageSearchBar } from './components/image-search-bar';
import SearchImageGrid from './components/search-image-grid';

export default function HomePage() {
  return (
    <>
      <Header>
        <ImageSearchBar />
        <LikedImagesLink />
      </Header>
      <SearchImageGrid />
    </>
  );
}
