import { styled } from "styled-components";

export const StyledShowCase = styled.div`
    padding-top: 98px;
    
    .banner-image {
        width: 50%;
        transform: rotateY(180deg);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding-top: 60px;

        .banner-image {
            display: none;
        }
    }
`