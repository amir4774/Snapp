import { styled } from "styled-components";

export const StyledItems = styled.div`
    background-color: ${({ theme }) => theme.colors.lightBlue};
    
    .main-title {
        padding: 30px;
        text-align: center;
        color: #3f3f3f;
        font-size: 2.7rem;
    }

    /* For Last Two Items */
    .flex {
        display: flex;
        justify-content: center;
        padding: 30px 0 40px;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        .main-title {
            font-size: 1.4rem;
        }

        .flex {
            padding: 20px 0 15px;
        }
    }
`

export const ItemsContainer = styled.div`
    width: 65%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.mobile}) {
       width: 80%;
    }
`

export const Services = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px 25px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        gap: 25px 35px;
    }
`