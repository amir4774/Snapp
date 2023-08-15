import { styled } from "styled-components";

export const Button = styled.button`
    background: ${({ mybackground }) => mybackground || '#fff'};
    color: ${({ mycolor, theme }) => mycolor || theme.colors.green};
    border: ${({ myborder }) => myborder || 'none'};
    border-radius: 6px;
    padding: 6px 30px;
    font-weight: bolder;
    font-size: 1.1rem;
    font-family: 'iran';
    cursor: pointer;

    &:hover {
        background: ${({ hoverbg }) => hoverbg || ''};
    }
`