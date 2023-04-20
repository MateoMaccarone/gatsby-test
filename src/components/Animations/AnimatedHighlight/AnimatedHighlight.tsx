import * as React from 'react'
import styled from 'styled-components'

import useScroll from "../../../hooks/useScroll";

const Highlight = styled.span<{ width: number, ref: any }>`
  position: relative;

  &::after {
    width: ${(props) => props.width}%;
    height: 100%;
    background: #49ffca;
    content: " ";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

interface AnimatedHighlightProps {
    children: React.ReactNode | Array<React.ReactNode>
    offset: number
}

const AnimatedHighlight:React.FC<AnimatedHighlightProps> = (props) => {

    const { scrollTop } = useScroll();
    const [highlightWidth, setHighlightWidth] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>();

    React.useEffect(() => {
        const centerOfCamera = scrollTop + props.offset;
        if (centerOfCamera >= ref.current!.offsetTop) {
            const diff =
                (((ref.current!.offsetTop - centerOfCamera) * 3) /
                    ref.current!.offsetTop) *
                100;
            const width = Math.abs(Math.floor(diff));
            const parsedHeight = width < 100 ? width : 100;
            setHighlightWidth(parsedHeight);
        } else {
            setHighlightWidth(0);
        }
    }, [scrollTop]);

    return (
        <Highlight width={highlightWidth} ref={ref}>
            {props.children}
        </Highlight>
    )
}

export default AnimatedHighlight
