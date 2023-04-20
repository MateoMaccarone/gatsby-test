import styled from "styled-components";
import React from "react";
import clsx from "clsx";

interface SecondaryButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
}

const StyledButton = styled.button`
  background: #ffffff;
  border: 2px solid #000000;
  padding: 10.5px 57px;
  color: #000;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: 2px;
  text-transform: uppercase;

  &.active {
    @media (min-width: 992px) {
      &:hover {
        box-shadow: 0 4px 6px rgba(48, 47, 63, 0.2);
      }
    }

    &:active {
      background: #48ffcb;
      box-shadow: none;
      font-weight: 500;
    }
  }

  &.loading {
    cursor: wait;
  }
`;

const SecondaryButton: React.FC<SecondaryButtonProps> = (props) => {
  return (
    <StyledButton
      onClick={(event) => {
        if (props.loading) {
          return;
        }
        props.onClick?.();
      }}
      className={clsx({
        [props.className ?? ""]: true,
        active: !props.loading,
        loading: props.loading,
      })}
    >
      {props.loading ? "Loading..." : props.children}
    </StyledButton>
  );
};

export default SecondaryButton;
