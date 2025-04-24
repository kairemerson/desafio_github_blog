import styled from "styled-components";


export const Input = styled.input`
    width: 100%;
    padding: 1.2rem 1.6rem;
    border-radius: 6px;
    background: ${props => props.theme["base-input"]};
    border: 0;
    border: 1px solid ${props=> props.theme["base-border"]};
    color: ${props => props.theme["base-text"]};

    &::placeholder{
        color: ${props => props.theme["base-label"]};
        font-size: small
    }
`