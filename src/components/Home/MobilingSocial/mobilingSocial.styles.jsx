import { ButtonBase } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`
color: #FCFCFD;
display: flex;
flex-direction: column;
// max-width: 100%;
height: auto;
padding: 30px 20px 20px 100px;
flex-grow: 1;
overflow-x: hidden;
// max-width: 1000px;
`;

export const Text = styled.h3`
font-family: Lexend;
font-weight: 500;
font-size: 40px;
line-height: 50px;
color: #344054;
`;

export const Box = styled.div`
    background-image: linear-gradient(to bottom ,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.693),rgba(0, 0, 0, 1));
    // background-color: #EAEAEA;
    border-radius: 30px;
    max-width: 1160px;
    // width: 100%;
    padding: 32px 30px;
`;

export const BoxContent = styled.div`
    border: 1px dashed #FCFCFD;
    padding: 20px;
    // border-style: dashed;
`;

export const Title = styled.h3`
    color: #FCFCFD;
    font-family: Lexend;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
`;

export const Description = styled.p`
    color: #FCFCFD;
    font-family: Lexend;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    max-width: 665px;
`;

export const Button = styled.button`
    background-color: #344054;
    color: #FCFCFD;
    padding: 12px, 40px, 12px, 40px;
    gap: 8px;
    height: 48px;
    border: none;
    outline: none;
    margin-right: 20px;
    font-family: Lexend;
    font-weight:400;
    font-size:18px;
    line-height: 22.5px;
`;