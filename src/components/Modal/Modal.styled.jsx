import styled from "styled-components";
export const Backdrop = styled.div`
    position: fixed;
    background-color: rgba(46, 47, 66, 0.7);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
`
export const Wrapper = styled.div`
    background-color: #ffff00;
    margin: 0 auto;
    width: 350px;
    border: 2px solid #823382;
    border-radius: 25px;
    display: block;
    backdrop-filter: blur(5px);
    height: 250px;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
`
export const Dialog = styled.div`
    background-color: #ffff00;

`
export const Content = styled.div`
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

`
export const Title = styled.h5`
    text-align: center;
    color: #130a31;
    font-size: 28px;
    font-weight: 700;
    font-family: sans-serif;
    margin: 0;
`
export const Button = styled.button`
    width: 125px;
    padding: 8px 8px;
    background-color: #130a31;
    color: #ffff00;
    font-size: 18px;
    font-weight: 500;
    font-family: sans-serif;
    border: 2px solid #823382;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
`
export const Body = styled.div`
    color: #130a31;
    font-size: 32px;
    font-weight: 700;
    font-family: sans-serif;
    text-align: center;
    margin-top: 30px;
    padding: 30px 20px;
    border: 2px solid #130a31;
    background-color: #00ff7f; 
    border-radius: 8px;
`