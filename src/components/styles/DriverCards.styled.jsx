import { styled } from "styled-components";

export const StyledDriverCards = styled.div`
    display: flex;
    align-items: center;
    padding: 40px 30px;
    background-color: #fff;
    border-radius: 15px;

    img {
        width: 120px;
        height: 57px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        padding: 40px 15px;
        margin-top: 20px;

        img {
            width: 75px;
            height: 40px;
        }
    }
`

export const TextCards = styled.div`
    color: ${({ theme }) => theme.colors.textColor};
    margin-right: 10px;
`

export const CardTitle = styled.p`
    font-size: 1.1rem;
`

export const CardBody = styled.p`
    font-size: 0.9rem;
`