import { useStore } from "../../../store/mainStore";
import { MdOutlineClose } from "react-icons/md";
export const CurrentPhoto = () => {
  const currentPhoto = useStore((state) => state.currentPhoto);
  const setCurrentPhoto = useStore((state) => state.setCurrentPhoto);
  return (
    <div className="currentPhoto_wrap">
      <div className="currentPhoto">
        <img src={currentPhoto.urls.regular} />
        <p>{currentPhoto.alt_description}</p>
        <p>{currentPhoto.user.name}</p>
      </div>
      <MdOutlineClose
        className="closeButton"
        onClick={() => setCurrentPhoto(null, null)}
      />
    </div>
  );
};
