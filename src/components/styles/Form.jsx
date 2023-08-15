import { styled } from "styled-components";

export const Form = styled.form`
    display: flex;
    margin-top: 20px;

    input {
        font-family: 'iran';
        margin-left: 20px;
        width: 270px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #f4f4f4;
        color: #fff;
        outline: none;
        padding-right: 10px;
    }

    input::placeholder {
        color: #ddd;
    }

    .btn {
        margin: 17px -40px 0 20px;
        font-size: 0.5rem;
    }

    .btn-delete {
        margin-top: -4px;
        background-color: #aaa;
        cursor: pointer;
        border-radius: 50%;
        width: 17px;
        height: 17px;
        position: relative;
    }
    
    .delete {
        font-size: 0.6rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`