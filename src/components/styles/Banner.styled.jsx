import { styled } from "styled-components";

export const StyledBanner = styled.div`
    width: 50%;
    background: ${({ theme }) => theme.colors.backgrounGreen};
    padding-right: 220px;
    padding-top: 50px;
    color: #fff;

    .block-btn {
        display: none;
        width: 90%;
        margin: 15px auto 20px;
    }

    .block-btn > button {
        width: 100%;
        padding: 10px;
        cursor: pointer;
        border-radius: 6px;
        border: none;
        font-weight: bold;
        font-size: 1.1rem;
        font-family: 'iran';
        background: #fff;
    } 

    @media (max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        padding: 0px;

        .form {
            display: none;
        }

        .block-btn {
            display: block;
        }
    }
`

export const Title = styled.p`
    font-weight: bolder;
    line-height: 3rem;
    font-size: 2.7rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.7rem;
        width: 90%;
        margin: 10px auto;
    }
`

export const Body = styled.p`
    margin-top: 40px;
    padding-left: 2px;
    font-size: 1.6rem;
    line-height: 2rem;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.2rem;
        width: 90%;
        margin: 10px auto;
    }
`