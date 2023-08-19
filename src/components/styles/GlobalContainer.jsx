import { styled } from "styled-components";

export const GlobalContainer = styled.div`
    width: 70%;
    margin: ${({ margin_top_bottom }) => margin_top_bottom} auto;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 90%;
        margin: 40px auto;
    }
`