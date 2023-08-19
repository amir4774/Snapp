import { styled } from "styled-components";

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
    
    @media(max-width: ${({ theme }) => theme.mobile}) { 
        margin: 40px 0;
    }
`

export const FooterNav = styled.div`

    div {
        margin-left: 20px;
        display: inline-block;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        line-height: 2;
    }
`

export const SocialMedia = styled.div`
    margin: 30px 0 20px;
    
    .icon {
        margin-left: 10px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`

export const FooterImages = styled.div`
    img {
        cursor: pointer;
    }

    #second-image {
        width: 130px;
        height: 130px;
    }
`