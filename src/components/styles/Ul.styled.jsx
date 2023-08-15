import { styled } from "styled-components";

export const StyledUl = styled.ul`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    border-bottom: 1px solid #f4f4f4;
    padding: 20px;

    li {
        padding-top: 30px;
        font-size: 1.1rem;
    }

    #first {
        padding-top: 0;
    }

    span {
        color: ${({ theme }) => theme.colors.green};
    }
`

export const AppUl = styled.div`
    padding: 20px;
    color: ${({ theme }) => theme.colors.green};
    cursor: pointer;

    .app {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }

    .items {
        margin-top: 20px;
        transition: all 1s;
        display: ${({ down }) => down ? 'none' : 'block'};
    }

    li {
        display: flex;
        margin-bottom: 25px;
    }

    li > a {
        margin-right: 10px;
    }

    .big-image {
        width: 25px;
        height: 25px;
    }
`