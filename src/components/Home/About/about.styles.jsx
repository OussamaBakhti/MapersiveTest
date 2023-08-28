import { styled } from "styled-components";

export const Title = styled.span`
    color: #344054;
    font-family: Lexend;
    font-weight: 500;
    font-size: 40px;
    line-height: 50px;
`;

export const SubTitle = styled.span`
    color: #344054;
    font-family: Lexend;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
`;
export const Container = styled.div`
color: #FCFCFD;
display: flex;
flex-direction: row;
padding: 100px 200px 20px 100px;
justify-content: space-between;
max-width: 100%;
height: auto;
flex-grow: 1;
// overflow-x: hidden;
    @media (max-width: 1160px) {
        padding: 100px 50px 20px 100px;
    }
    @media (max-width: 770px) {
        flex-direction: column;
    }

`;

export const Description = styled.p`
color: #344054;
font-family: Lexend;
font-weight: 400;
font-size: 20px;
line-height: 25px;
max-width: 560px;
`;
export const Box = styled.div`
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    max-width: 500px;
`;

export const ContentBox = styled.div`
    background-color: #E3E6E9;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100%;
    border-radius: 30px;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SubContent = styled.div`
    flex: 1 0 47%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const Text = styled.p`
    max-width: 114px;
    height: 88px;
    color: #344054;
    padding: 0;
`;