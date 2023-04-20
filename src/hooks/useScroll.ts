import { useEffect, useState } from "react";

interface UseScrollParams {
  onScrollCallback?: (direction: "up" | "down") => void;
}

const useScroll = (params?: UseScrollParams) => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const onScroll = (e) => {
    const window = e.currentTarget;
    if (params) {
      if (scrollTop > window.scrollY) {
        params.onScrollCallback?.("up");
      } else if (scrollTop < window.scrollY) {
        params.onScrollCallback?.("down");
      }
    }
    setScrollTop(e.target.documentElement?.scrollTop!);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return { scrollTop };
};
export default useScroll;
