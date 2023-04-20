import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 34px;
`;

const Window = styled.div<{
  translation: number;
  transitioning: boolean;
  height: number;
}>`
  @media (max-width: 992px) {
    height: 74px;
  }
  height: 54px;
  overflow: hidden;
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 54px;
  text-align: center;
  color: #48ffcb;

  & .text {
    @media (max-width: 992px) {
      height: 74px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 31px;
      font-weight: 700;
      line-height: 37px;
    }
    transform: translateY(${(props) => props.translation}px);
    ${(props) => (props.transitioning ? `transition: transform .8s ease;` : "")}
  }
`;

interface SliderTextProps {
  texts: string[] | React.ReactElement[];
}

const SlotMachine: React.FC<SliderTextProps> = (props) => {
  const list = props.texts;
  const [translation, setTranslation] = useState<number>(0);
  const [tick, setTick] = useState<number>(0);
  const [current, setCurrent] = useState<
    string | React.ReactElement | undefined
  >(list[0]);
  const [next, setNext] = useState<string | React.ReactElement | undefined>(
    list[1]
  );
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const refText1 = useRef<HTMLDivElement>(null);
  const refText2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTransitioning(true);
    setTranslation(refText1.current!.clientHeight * -1);

    setTimeout(() => {
      setTransitioning(false);
      setCurrent(next);
      setNext((old) => {
        if (list.indexOf(old!) + 1 >= list.length) {
          return list[0];
        }
        return list[list.indexOf(old!) + 1];
      });
      setTranslation(0);
    }, 3000);
  }, [tick]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((old) => old + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Window
        height={refText1.current?.clientHeight ?? 54}
        translation={translation}
        transitioning={transitioning}
      >
        {current && (
          <div ref={refText1} className="text">
            {current}
          </div>
        )}
        {next && (
          <div ref={refText2} className="text">
            {next}
          </div>
        )}
      </Window>
    </Wrapper>
  );
};

export default SlotMachine;
