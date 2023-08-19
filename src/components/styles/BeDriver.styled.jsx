import { styled } from "styled-components";

export const StyledBeDriver = styled.div`
    padding: 30px 0 20px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
`

export const Titles = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.textColor};

    .main-title {
        font-size: 2.5rem;
    }

    .second-title {
        font-size: 1.4rem;
        margin-bottom: 20px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {        
        .main-title {
            font-size: 2.3rem;
            line-height: 1.2;
            padding: 0 10px;
        }

        .second-title {
            margin-top: 20px;
            line-height: 1.4;
        }
    }
`