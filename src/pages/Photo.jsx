import { useContext } from "react";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utlis/indeximage";
function Photos() {
  const { allPhotos } = useContext(Context);
  const array = allPhotos.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });
  return <main className="photos">{array}</main>;
}

export default Photos;
