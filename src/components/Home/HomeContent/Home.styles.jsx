import { TextField, Typography } from "@mui/material";
import { styled } from "styled-components";

export const Text  = styled(Typography)`
    color: #98A2B3;
    margin: 5px 0 !important;
    font-size: ${props => props.size ? props.size : "16px"} !important;
    font-weight: ${props => props.weight ? props.weight : "400"} !important;
    line-height: ${props => props.lineHeight ? props.lineHeight : "20px"} !important;
    font-family: Lexend;
`;

export const TextInput = styled(TextField)`
    max-width: 459px;
    margin: 20px 0 !important;
    background-color: white;
`;

export const Container = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    @media (min-width: 770px) {
        max-width: 100%;
    }
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    background-color: #F2F4F7;
    height: auto;
    padding-top: 200px;
    padding: 100px 20px 20px 100px;
    flex-grow: 1;
    // overflow-x: hidden;
    @media (max-width: 1160) {
        flex-direction: column!important;
    }
`;

export const H1 = styled.h1`
    color: #344054;
    font-family: Lexend;
    font-size: 80px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    // margin-bottom: 30px;
    // padding: 10px;
    max-width: 719px;
`;

export const H2 = styled.h2`
    color: #344054;
    font-family: Lexend;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px;
    max-width: 719px;
`;

export const Description = styled.div`
    font-size: 24px;
    font-family: Lexend;
    font-weight: 400;
    line-height: 30px;
    max-width: 660px;
    color: #98A2B3;
`;