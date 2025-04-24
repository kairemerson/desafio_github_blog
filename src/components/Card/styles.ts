import styled from "styled-components";


export const CardContainer = styled.a`
    padding: 3.2rem;
    background: ${props => props.theme["base-post"]};
    width: 41.6rem;
    height: 26.0rem;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;

    &:hover{
        outline: 2px solid ${props => props.theme["base-label"]};
    }

    div{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        overflow: hidden;
        height: 5.2rem;
        
        h2{
            width: 75%;
            font-size: larger;
            color: ${props => props.theme["base-title"]};
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
        span{
            font-size: smaller;
            color: ${props => props.theme["base-span"]};
        }
    }
    
    p{
        margin-top: 2rem;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.6;
        color: ${props => props.theme["base-text"]};
        overflow: hidden;
        line-clamp: 4;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
`