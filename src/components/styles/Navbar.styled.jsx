import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
    position: fixed;
    z-index: 5;
    width: 100%;
    background-color: #fff;
    display: flex;
    padding: 25px 0;
    padding-right: 155px;
    border-bottom: 1px solid #f4f4f4;

    img {
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 10px 15px;
    }
`

export const Hamburger = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: block;
    }
`

export const NavbarUl =styled.ul`
    display: flex;

    li {
        margin-right: 30px;
        margin-top: 5px;
        font-size: 1.1rem;
    }
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`