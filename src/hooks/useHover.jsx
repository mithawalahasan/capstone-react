import { useEffect, useRef, useState } from "react";

function useHover() {
  const [hover, sethover] = useState(false);
  const ref = useRef(null);
  function Enter() {
    sethover(true);
  }
  function Leave() {
    sethover(false);
  }
  useEffect(() => {
    ref.current.addEventListener("mouseenter", Enter);
    ref.current.addEventListener("mouseleave", Leave);
    // return () => {
    //   ref.current.removeEventListener("mouseenter", Enter);
    //   ref.current.removeEventListener("mouseleave", Leave);
    // };
  });
  return [hover, ref];
}
export default useHover;
