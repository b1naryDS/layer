import { HomeIcon } from '../../../components/icons/home-icon';

export default function HomePageLink() {
  return (
    <a href="/">
      <div className="flex justify-center items-center">
        <div className="relative py-2">
          <HomeIcon />
        </div>
      </div>
    </a>
  );
}
