import React from 'react';
import styled from 'styled-components';

import HeroMobile from '../../images/hero-mobile.jpg';
import HeroDesktop from '../../images/hero-desktop.jpg';

const MobileHeroContainer = styled.img`
    width: 100vw;
    padding: 0;
    margin-top: 1.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: none;
    }
`;

const DesktopHeroContainer = styled.img`
    display: none;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: hero;
        display: block;
        height: 100%;
        width: 100%;
    }
`;

const Hero = () => {
    return (
        <>
            <MobileHeroContainer src={HeroMobile} alt='Hero Image' />
            <DesktopHeroContainer src={HeroDesktop} alt='Hero Image' />
        </>
    );
};

export default Hero;
