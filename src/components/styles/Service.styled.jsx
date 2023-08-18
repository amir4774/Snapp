import { styled } from "styled-components";

export const StyledService = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px;
    background-color: #fff;
    border-radius: 15px;
    cursor: pointer;

    img {
        width: 55px;
        height: 55px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        padding: 10px 5px;
        border-radius: 25px;

        img {
            width: 43px;
            height: 43px;
        }
    }
`

export const Texts = styled.div`
    margin-right: 10px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-right: 0;
        text-align: center;
    }
`

export const ServiceTitle = styled.p`
    color: #3f3f3f;
    font-size: 1.1rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1rem;
    }
`

export const ServiceBody = styled.p`
    color: #a3a3a3;
    font-size: 0.9rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`