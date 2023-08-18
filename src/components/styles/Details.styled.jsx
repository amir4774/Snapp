import { styled } from "styled-components";

export const StyledDetails = styled.div`
    display: flex;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const MainImage = styled.div`
    background: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/super-app.jpg") center center /cover;
    width: 50%;
    height: 65vh;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        height: 30vh;
    }
`

export const Text = styled.div`
    width: 37%;
    padding: 30px;
    color: ${({ theme }) => theme.colors.textColor};

    .title {
        font-size: 1.7rem;
    }

    p {
        margin-top: 15px;
        font-size: 1rem;
        line-height: 1.3;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 100%;
        padding: 17px;

        .title {
            font-size: 1.5rem;
        }

        p {
            margin-top: 10px;
            font-size: 0.92rem;
            line-height: 1.7;
        }
    }
`