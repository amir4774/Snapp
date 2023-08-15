import { styled } from "styled-components";

export const StyledAbout = styled.div`
    margin: 70px 0 20px;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        margin: 40px 0 20px;
    }
`