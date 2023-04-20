import styled from "styled-components";
import React from "react";
import clsx from "clsx";

interface PrimaryButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const StyledButton = styled.button`
  background: #000000;
  border: 0;
  padding: 12.5px 31.5px;
  color: white;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 2px;
  text-transform: uppercase;

  &.active {
    &:hover {
      background: #292929;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      font-weight: 500;
    }

    &:active {
      background: #48ffcb;
      box-shadow: none;
      color: black;
      font-weight: 500;
    }
  }

  &.loading {
    cursor: wait;
  }
`;

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <StyledButton
      className={clsx({
        [props.className ?? ""]: true,
        active: !props.loading,
        loading: props.loading,
      })}
      onClick={(event) => {
        if (props.loading) {
          return;
        }
        props.onClick?.();
      }}
    >
      {props.loading ? "Loading..." : props.children}
    </StyledButton>
  );
};

export default PrimaryButton;
