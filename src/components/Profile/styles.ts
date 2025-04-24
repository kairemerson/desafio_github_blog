import styled from "styled-components";

export const ProfileContainer = styled.div`
    background: ${props => props.theme["base-profile"]};
    display: flex;
    width: 100%;
    margin: -10rem auto ;
    padding: 3.2rem;
    border-radius: 10px;
    gap: 3.2rem;
`

export const ImageContainer = styled.div`
   width: 14.8rem;
   height: 14.8rem;
`
export const ImageProfile = styled.img`
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
`



export const InfoContainer = styled.div`
    width: 100%;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    
    p {
        color: ${props => props.theme.blue};
        font-size: small;
    }
    svg{
        width: 12px;
        height: 12px;
        color: ${props => props.theme.blue};
    }
`

export const Title = styled.h2`
    font-size: 2.4rem;
    color: ${props => props.theme["base-title"]};
    margin-bottom: 0.5rem;
`

export const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    height: fit-content;
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: all 0.3s;
    line-height: 0;

    &:hover {
        border-bottom: 1px solid ${props => props.theme.blue};
    }
    
`

export const Description = styled.p`
    font-size: smaller;
    color: ${props => props.theme["base-text"]};
    margin: 0.8rem 0;
    
`

export const FooterProfile = styled.div`
    display: flex;
    gap: 2.4rem;
    margin-top: 2.8rem;

    div{
        display: flex;
        gap: 0.8rem;
        align-items: center;

        p{
            color: ${props => props.theme["base-subtitle"]};
            font-size: smaller;
        }
        svg{
            width: 1.8rem;
            height: 1.8rem;
            color: ${props => props.theme["base-label"]};

        }
    }
`