import React from 'react';
import styled from 'styled-components';

import LogoImage from '../../images/logo.svg';

const LogoContainer = styled.img`
    place-self: start;
    width: 6.25rem;
    height: 1.25rem;
    margin-top: 1.875rem;
    margin-left: 1.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: logo;
        width: 10rem;
        height: 1.875rem;
        margin-top: 3.75rem;
        margin-left: 9.375rem;
    }
`;

const Logo = () => {
    return <LogoContainer src={LogoImage} alt='Base Apparel' />;
};

export default Logo;
