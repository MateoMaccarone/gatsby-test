import React, { useState } from "react";
import { PopupModal } from "react-calendly";
import styled from "styled-components";
import { document } from "browser-monads";

interface CalendlyWrapperProps {
  children?: React.ReactNode;
  url: string;
  className?: string;
}

const StyledDiv = styled.div`
  //width: fit-content;
`;

const CalendlyWrapper: React.FC<CalendlyWrapperProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <PopupModal
        url={props.url}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        rootElement={document.getElementById("___gatsby")!}
      />
      <StyledDiv className={props.className} onClick={() => setIsOpen(true)}>
        {props.children}
      </StyledDiv>
    </>
  );
};

export default CalendlyWrapper;
