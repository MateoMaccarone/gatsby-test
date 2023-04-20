import * as React from 'react'

import Display from "../../../Display";

import HeroDesktop from './Hero.desktop'
import HeroMobile from './Hero.mobile'

const Hero = () => {
    return (
        <>
            <Display on='desktop'>
                <HeroDesktop />
            </Display>
            <Display on='mobile'>
                <HeroMobile />
            </Display>
        </>
    )
}

export default Hero
