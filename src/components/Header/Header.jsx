import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    padding: 0 1.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: header;
        place-self: start;
        margin-left: 9.375rem;
        margin-top: -6.25rem;
        padding: 0;
        width: 27.5rem;
    }
`;

const MainText = styled.p`
    letter-spacing: 0.9375rem;
    font-size: 3rem;
    font-weight: ${(props) => props.theme.fontweights.light};
    margin-top: 3.75rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 22.5rem;
    }
`;

const BoldedText = styled.span`
    color: ${(props) => props.theme.colors.tertiary};
    font-weight: ${(props) => props.theme.fontweights.semiBold};
`;

const SecondaryText = styled.p`
    margin-top: 1.875rem;
    line-height: 1.5;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <MainText>
                WE'RE <BoldedText>COMING SOON</BoldedText>
            </MainText>
            <SecondaryText>
                Hello fellow shoppers! We're currently building our new fashion
                store. Add your email below to stay up-to-date with
                announcements and our launch deals.
            </SecondaryText>
        </HeaderContainer>
    );
};

export default Header;
