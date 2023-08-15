import { styled } from "styled-components";

export const StyledImages = styled.div`
    width: 70%;
    height: 351px;
    margin: 80px auto;
    overflow: hidden;
    position: relative;

    .images {
        position: absolute;
        top: 0;
        left: -700px;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        opacity: 0;
        transition: all 0.2s;
    }

    .images.show {
        opacity: 1;
        left: 0px;
    }

    .selected {
        background-color: #fff !important;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        width: 90%;
        height: 170px;
        margin: 40px auto;
    }
`

export const Food = styled.div`
    background: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Food.jpg") no-repeat center center / cover;  
`

export const Market = styled.div`
    background: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Market.jpg") no-repeat center center / cover;
`

export const Driver = styled.div`
    background: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Driver.jpg") no-repeat center center / cover;
`

export const Club = styled.div`
    background: url("https://web-cdn.snapp.ir/snapp-website/images/homepage/slider/Club.jpg") no-repeat center center / cover;
`

export const Dots = styled.div`
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%);
    background-color: hsl(0,0%,100%,.18);
    border-radius: 10px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
`

export const DotsButtons = styled.button`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: none;
    background-color: hsla(0,0%,100%,.31);
    margin: 0 3px;
    padding: 4px;
    cursor: pointer;
`