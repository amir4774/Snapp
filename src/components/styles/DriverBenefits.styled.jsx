import { styled } from "styled-components";

export const StyledDriverBenefits = styled.div`
    .driver-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-top: 60px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        .driver-cards {
            display: block;
            gap: 0px;
            margin-top: 40px;
        }
    }
`

export const Video = styled.video`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`