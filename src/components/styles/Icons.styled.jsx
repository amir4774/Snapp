import { styled } from "styled-components";

export const StyledIcons = styled.div`
    padding: 70px 0;
    text-align: center;

    img {
        padding: 0px 25px;
        width: 14%;
        object-fit: contain;
        cursor: pointer;
    }


    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`