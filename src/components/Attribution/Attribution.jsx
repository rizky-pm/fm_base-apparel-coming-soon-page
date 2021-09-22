import React from 'react';
import styled from 'styled-components';

const AttrContainer = styled.footer`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    line-height: 20px;
    width: 60vw;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        left: 0;
        transform: translateX(0);
        margin-left: 9.375rem;
    }
`;

const Attr = styled.p`
    color: ${(props) => props.theme.colors.tertiary};
`;

const AttrLink = styled.a`
    color: inherit;
    transition: all ease 0.3s;

    :hover {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
    }
`;

const Attribution = () => {
    return (
        <AttrContainer>
            <Attr>
                Challenge by{' '}
                <AttrLink
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </AttrLink>
                . Coded by{' '}
                <AttrLink href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </AttrLink>
                .
            </Attr>
        </AttrContainer>
    );
};

export default Attribution;
