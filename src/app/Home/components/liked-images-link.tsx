import { useImageSelectors } from '../../../stores/useImagesStore';
import { HeartIcon } from '../../../components/icons/heart-icon';

export default function LikedImagesLink() {
  const { likedImagesCount } = useImageSelectors();
  return (
    <a href="/liked">
      <div className="flex justify-center items-center">
        <div className="relative py-2">
          <div className="t-0 absolute left-4">
            <p className="flex h-2 w-2 -mt-3 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
              {likedImagesCount}
            </p>
          </div>
          {HeartIcon()}
        </div>
      </div>
    </a>
  );
}
