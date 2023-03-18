import React, { useState, useEffect } from "react";
const Context = React.createContext();
function ContextProvider(props) {
  const [allPhotos, setallPhotos] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [iscart, setiscart] = useState(false);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((res) => res.json())
      .then((data) => setallPhotos(data));
  }, []);
  function togglefavourite(id) {
    const arr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setallPhotos(arr);
  }
  function Items(obj) {
    setcartItems((prevItem) => [...prevItem, obj]);
  }
  function removefromcart(id) {
    setcartItems((prevItem) => prevItem.filter((photo) => photo.id !== id));
  }
  function PlaceOrder() {
    setiscart(true);
    setTimeout(() => {
      console.log("order placed");
      setcartItems([]);
      setiscart(false);
    }, 3000);
  }
  // function emptycart() {
  //   setcartItems([]);
  // }
  return (
    <Context.Provider
      value={{
        allPhotos,
        togglefavourite,
        Items,
        cartItems,
        removefromcart,
        PlaceOrder,
        iscart,
        // emptycart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
