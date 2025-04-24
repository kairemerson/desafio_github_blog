import styled from "styled-components";


export const HomeContainer = styled.main`
    max-width: 864px;
    width: 100%;
    margin: 0 auto;
    
`

export const PublushedContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 14rem;
    margin-bottom: 1.2rem;

    h2 {
        font-size: medium;
        color: ${props => props.theme["base-subtitle"]};
    }
    
    p{
        font-size: small;
        color: ${props => props.theme["base-span"]};

    }
`

export const CardsCotainer = styled.div`
    margin: 4.8rem 0;
    display: flex;
    gap: 3.2rem;
`