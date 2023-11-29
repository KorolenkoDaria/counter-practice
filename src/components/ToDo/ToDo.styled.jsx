import styled from "styled-components";

export const Item = styled.li`
    list-style: none;
    background-color: #ffff00;
    color: #130a31;
    font-family: sans-serif;
    font-weight: 700;
`
export const Wrapper = styled.div`
    padding: 14px;
`
export const InputWrapp = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    gap: 10px;
`
export const Checkbox = styled.input`
    margin-left: 8px;  
    border: 1px solid #130a31;
    width: 20px;
    height: 20px;
`

export const BtnWrapp = styled.div`
     margin-left: 8px;  
     padding-left: 6px;
`
export const Button = styled.button`
    background-color: #130a31;
    width: 40px;
    height: 20px;
    border: none;
    color: #ffff00;
    font-size: 12px;
    padding: 0;
`