import React from "react";

type VisibleType = {
  isVisible: boolean;
  children: React.ReactNode;
};

export const HidableComponent: React.FC<VisibleType> = ({
  isVisible,
  children,
}) => {
  return isVisible ? <>{children}</> : null;
};

export const hidable = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithHidable: React.FC<P & VisibleType> = (props) => {
    const componentProps = { ...props };
    // @ts-ignore
    delete componentProps.isVisible;
    return (
      <HidableComponent isVisible={Component && props.isVisible}>
        <Component {...componentProps} />
      </HidableComponent>
    );
  };
  return WithHidable;
};
