import Header from '../../components/header';
import HomePageLink from './components/home-page-link';
import LikedImagesGrid from './components/liked-images-grid';

export default function LikedImages() {
  return (
    <>
      <Header>
        <h1 className="w-full text-start text-2xl">Liked images</h1>
        <HomePageLink />
      </Header>
      <LikedImagesGrid />
    </>
  );
}
