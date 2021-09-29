import React from "react";
// import { getGifts } from "../helpers/getGifts";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  
  // const [images, setImages] = useState([]);

  const {data:images, loading}= useFetchGifs( category );

  // useEffect(() => {
  //   getGifts(category)
  //       .then(setImages)
  // }, [category]);



  //getGifts();

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> {category} </h3>
      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
