import * as React from 'react'
import styled from 'styled-components'

import './animations.css'

interface AnimationProps {
    type: | 'BounceUp' | 'BounceRight' | 'BounceDown' | 'BounceLeft';
    duration: string;
}

const Animation = styled.div<AnimationProps>`
  display: flex;
  
  & > img {
    animation-name: ${props => (props.type)};
    animation-duration: ${props => (props.duration)};
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }
`

interface AnimatedIconProps {
    className?: string;
    style?: React.CSSProperties;
    src?: string;
    alt?: string;
}

interface AnimatedIconMergedProps extends AnimationProps, AnimatedIconProps {}

const AnimatedIcon:React.FC<AnimatedIconMergedProps> = (props) => {
    return (
        <Animation type={props.type} duration={props.duration}>
            <img className={props.className} style={props.style} src={props.src} alt={props.alt} />
        </Animation>
    )
}

export default AnimatedIcon
