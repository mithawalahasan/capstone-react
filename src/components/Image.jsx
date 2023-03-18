import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
// import Photos from "../pages/Photo";
function Image(props) {
  // const [hovered, sethovered] = useState(false);
  const { togglefavourite, Items, cartItems, removefromcart } =
    useContext(Context);
  const [hover, ref] = useHover();

  const heartIcon =
    (props.img.isFavorite && ( //always want to display the filled in heart we care more about img favourtie rather than being hovered that why we have wrriten img.isfavourtie first
      <i
        onClick={() => togglefavourite(props.img.id)}
        className="ri-heart-fill favorite"
      ></i>
    )) ||
    (hover && (
      <i
        onClick={() => togglefavourite(props.img.id)}
        className="ri-heart-line favorite"
      ></i>
    ));
  function image(id) {
    const items = cartItems.some((photo) => photo.id === id);
    return items;
  }
  const cartIcon =
    (image(props.img.id) && (
      <i
        onClick={() => removefromcart(props.img.id)}
        className="ri-shopping-cart-fill cart"
      ></i>
    )) ||
    (hover && (
      <i
        onClick={() => Items(props.img)}
        className="ri-add-circle-line cart"
      ></i>
    ));

  return (
    <div
      className={`${props.className} image-container`}
      // onMouseEnter={() => sethovered(true)}
      // onMouseLeave={() => sethovered(false)}
      ref={ref}
    >
      <img id={props.img.id} src={props.img.url} className="image-grid" />
      {heartIcon}
      {cartIcon}
    </div>
  );
}
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
