import React from "react";
import useWidth from "../hooks/useWidth";

interface DisplayProps {
  children?: React.ReactNode;
  on?: "desktop" | "mobile";
  className?: string;
  style?: React.CSSProperties;
}

const Display: React.FC<DisplayProps> = (props) => {
  const { isMobile } = useWidth();

  const renderChildren = () => {
    if (props.on === "mobile") {
      return (
        <div className={`d-block d-lg-none ${props.className}`}>
          {props.children}
        </div>
      );
    } else if (props.on === "desktop") {
      return (
        <div
          style={props.style}
          className={`d-none d-sm-none d-md-none d-lg-block ${props.className}`}
        >
          {props.children}
        </div>
      );
    } else {
      return null;
    }
  };

  return <>{renderChildren()}</>;
};

export default Display;
