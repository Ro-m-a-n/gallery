import { useStore } from "../../store/mainStore";

export const PhotosList = () => {
  const photosList = useStore((state) => state.photosList);
  const setCurrentPhoto = useStore((state) => state.setCurrentPhoto);
  const displayedItem = photosList.map((item, index) => {
    return (
      <div
        className="item_wrap"
        key={index}
        onClick={() => setCurrentPhoto(item, index + 1)}
      >
        <img src={item.urls.small_s3} />
        <div className="item_text">
          <p>{item.alt_description}</p>
          <p>{item.user.name}</p>
        </div>
      </div>
    );
  });
  return <div className="itemList_wrap">{displayedItem}</div>;
};
