import styled from "styled-components";

export const PostContainer = styled.div`
    max-width: 864px;
    width: 100%;
    margin: -8rem auto ;
`

export const HeaderContainer = styled.header`
    background: ${props => props.theme["base-profile"]};
    padding: 3.2rem;
    border-radius: 10px;
`


export const Header = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    a{
        font-size: small;
        text-decoration: none;
        color: ${props => props.theme.blue};
        border-bottom: 1px solid transparent;
        transition: all 0.3s;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }
    }
`

export const FooterPost = styled.div`
    display: flex;
    gap: 2.4rem;
    margin-top: 2rem;

    div{
        display: flex;
        gap: 0.8rem;
        align-items: center;

        p{
            color: ${props => props.theme["base-span"]};
            font-size: smaller;
        }
        svg{
            width: 1.8rem;
            height: 1.8rem;
            color: ${props => props.theme["base-label"]};

        }
    }
`

export const Content = styled.div`
    padding: 4rem 3.2rem;
    font-size: small;
    color: ${props => props.theme["base-text"]};
`