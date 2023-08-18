import { styled } from "styled-components";

export const StyledShowCase = styled.div`
    padding-top: 85px;
    
    .banner-image {
        width: 50%;
        transform: rotateY(180deg);
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding-top: 50px;

        .banner-image {
            display: none;
        }
    }
`