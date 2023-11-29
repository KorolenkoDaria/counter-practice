import styled from "styled-components";

export const Wrapper = styled.div`
    width: 350px;
    height: 550px;
    margin: 55px auto 0;
    border: 2px solid #823382;
    border-radius: 20px;
`

export const CounterMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`
export const Title = styled.h5`
    color: #ffff00;
    font-family: sans-serif;
    font-size: 38px;
    font-weight: 500;
`

export const Indicator = styled.p`
     color: #00ff7f;
    font-family: sans-serif;
    font-size: 68px;
    font-weight: 700;
    
`
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 40px;
`
export const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: inherit;
    border: 1px solid #823382;
    color: #ffff00;
    font-size: 38px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
`