import styled from "styled-components";

export const BtnWrap = styled.div `
    width: 100%;
    margin-bottom: 30px;

    button {
        width: 150px;
        padding: 10px;
        height: 70px;
        border: none;
        margin-right: 10px;
        cursor: pointer;
    }

    & .active {
        background: rgb(88, 194, 247);
        color: #fff;
        transition: 0.3s;
    }
    
`

export const QRWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`