import React, { useContext, useState } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function CartItem(props) {
  // const [hover, sethover] = useState(false);
  const { removefromcart } = useContext(Context);
  const [hover, ref] = useHover();
  console.log(ref);
  return (
    <div className="cart-item">
      {hover ? (
        <i
          // onMouseLeave={() => sethover(false)}
          className="ri-delete-bin-fill"
          ref={ref}
          onClick={() => removefromcart(props.item.id)}
        ></i>
      ) : (
        <i
          onClick={() => removefromcart(props.item.id)}
          className="ri-delete-bin-line price"
          // onMouseEnter={() => sethover(true)}
          ref={ref}
        ></i>
      )}

      <img src={props.item.url} width="130px" />
      <p className="price">&#8377;400</p>
    </div>
  );
}
CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};
export default CartItem;
