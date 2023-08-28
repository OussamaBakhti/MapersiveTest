import { styled } from "styled-components";

export const Steps = styled.div`
    // background-color: #1A89EC;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-width: 300px;
    justify-content: flex-end;
    background-color: rgba(26, 137, 236, 0.07);
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Container = styled.div`
    height: 20%;
    display: flex;
    width: 100%;
    justify-content: space-around;
    z-index: 1;
`

export const ImagesContainer = styled.div`
    position: absolute;
    right: 0px;

    height: 100%;
    width: auto;
    // padding: 0 0 0 -200px;
    overflow-x: hidden;
`;