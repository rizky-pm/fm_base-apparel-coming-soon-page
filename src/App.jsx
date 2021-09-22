import React from 'react';
import styled from 'styled-components';

import Bg from './images/bg-pattern-desktop.svg';

import Logo from './components/Logo/Logo';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header';
import InputEmail from './components/InputEmail/InputEmail';
import Attribution from './components/Attribution/Attribution';

const AppContainer = styled.section`
    display: grid;
    text-align: center;
    place-items: center;
    padding-bottom: 5.625rem;
    position: relative;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-template-areas:
            'logo hero'
            'header hero'
            'inputemail hero';
        grid-template-columns: 1fr 34.375rem;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100vh;
        width: 100vw;
        padding: 0;
        text-align: left;
        overflow: hidden;
    }
`;

const Background = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -8.125rem;
    left: 0;
    z-index: -2;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 62.7%;
        height: 100%;
        position: absolute;
        /* transform: rotate(180deg); */
        bottom: 0;
        left: -2.5rem;
    }
`;

function App() {
    return (
        <>
            <Background src={Bg} />
            <AppContainer>
                <Logo />
                <Hero />
                <Header />
                <InputEmail />
                <Attribution />
            </AppContainer>
        </>
    );
}

export default App;
