import "./scss/main.css";
import { useEffect } from "react";
import { useStore } from "./store/mainStore";
import { PhotosList } from "./components/photosList/photosList";
import { CurrentPhoto } from "./components/photosList/currentPhoto/currentPhoto";

const App = () => {
  const getPhotosList = useStore((state) => state.getPhotosList);
  const currentPhotoId = useStore((state) => state.currentPhotoId);
  useEffect(() => {
    getPhotosList(1);
  }, []);
  return (
    <>
      <PhotosList />
      {currentPhotoId && <CurrentPhoto />}
    </>
  );
};

export default App;
