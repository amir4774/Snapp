import { styled } from "styled-components";

export const StyledBenefits = styled.div`
    width: 60%;
    margin: -70px auto;
    display: grid;
    gap: 60px;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: ${({ theme }) => theme.mobile}) {
        margin: 10px 0 0;
        display: block;
        padding: 15px;
        width: 100%;
    }
`

export const CardBenefits = styled.div`
    .texts .title {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.textColor};
        margin: 15px 0;
    }

    .texts .body {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.textColor};
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 15px;

        #last-item {
            margin-bottom: 0px;
        }
    }
`

export const BenefitsImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f5f8;
    border-radius: 18px;

    img {
        height: 170px;
    }
`