import { useEffect, useState } from "react";
import { window } from "browser-monads";

const useWidth = () => {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const width = window.screen.width;

    setIsMobile(width < 992);
    setWidth(width);
  }, [window.screen.width]);

  return {
    width,
    isMobile,
  };
};

export default useWidth;
