import React, { useState } from 'react';
import styled from 'styled-components';

import RightArrow from '../../images/icon-arrow.svg';
import Error from '../../images/icon-error.svg';

import validateEmail from '../../utils/validateEmail';

const FormContainer = styled.form`
    position: relative;
    margin-top: 1.875rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: inputemail;
        place-self: start;
        margin-left: 9.375rem;
        padding: 0;
        margin-top: 3.125rem;
        width: 28.125rem;
        height: 2.8125rem;
    }
`;

const InputField = styled.input`
    width: 20.9375rem;
    height: 2.8125rem;
    border-radius: 1.5625rem;
    padding: 0.9375rem 7.5rem 0.9375rem 1.5625rem;
    border: ${(props) =>
        props.valid
            ? `.0625rem solid ${props.theme.colors.secondary}`
            : '.0625rem solid red'};
    outline: ${(props) => props.theme.colors.secondary};
    font-weight: ${(props) => props.theme.fontweights.light};
    transition: all ease 0.2s;

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${(props) => props.theme.colors.secondary};
        opacity: 1; /* Firefox */
    }

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 28.125rem;
    }
`;

const Button = styled.button`
    display: grid;
    place-items: center;
    width: 3.75rem;
    height: 2.8125rem;
    border-radius: 1.5625rem;
    position: absolute;
    bottom: 0;
    right: 0;
    background: linear-gradient(135deg, hsl(0, 36%, 70%), hsl(0, 93%, 68%));
    border: none;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0rem 0.8125rem 1.6875rem -0.3125rem,
        rgba(0, 0, 0, 0.3) 0rem 0.5rem 1rem -0.5rem;
    cursor: pointer;
    transition: all ease 0.2s;

    :disabled {
        cursor: default;
        background: ${(props) => props.theme.colors.primaryGradient};
    }

    :active {
        box-shadow: rgba(0, 0, 0, 0.19) 0rem 0.625rem 1.25rem,
            rgba(0, 0, 0, 0.23) 0rem 0.375rem 0.375rem;
    }

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 5rem;
        top: 0;
        right: 0;
    }
`;

const IconArrow = styled.img``;

const IconError = styled.img`
    position: absolute;
    bottom: 50%;
    right: 4.375rem;
    transform: translateY(50%);
    opacity: ${(props) => (props.emailStatus ? '0' : '1')};
    transition: all ease 0.2s;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        right: 5.625rem;
    }
`;

const ErrorMessage = styled.p`
    opacity: ${(props) => (props.show ? '0' : '1')};
    color: red;
    position: absolute;
    font-size: 0.875rem;
    bottom: -1.5625rem;
    left: 1.5625rem;
    transition: all ease 0.2s;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        left: 1.5625rem;
    }
`;

const InputEmail = () => {
    const [emailStatus, setEmailStatus] = useState(true);

    return (
        <FormContainer>
            <IconError src={Error} alt='Error' emailStatus={emailStatus} />
            <InputField
                type='email'
                name='Email Address'
                placeholder='Email Address'
                valid={emailStatus}
                onChange={(e) => {
                    validateEmail(e, setEmailStatus);
                }}
            />
            <ErrorMessage show={emailStatus}>
                Please provide a valid email
            </ErrorMessage>
            <Button disabled={emailStatus ? false : true}>
                <IconArrow src={RightArrow} alt='Right Icon' />
            </Button>
        </FormContainer>
    );
};

export default InputEmail;
