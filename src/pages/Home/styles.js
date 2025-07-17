import styled, { keyframes } from "styled-components";

const float = keyframes`
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }
`

export const Container = styled.div`
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: #fff;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 35%;
    align-items: center;
    margin: 30px 0;
    gap: 1rem;
    padding: 1rem;
    flex: 1;

    @media (max-width: 1020px) { 
        grid-template-columns: 1fr;
        align-items: center;
    }
`

export const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;

    p {
       font-weight: 500;
       font-size: 17px;
       text-align: justify;
    }

    span {
        font-weight: 700;
        font-size: 18px;
    }

    @media (max-width: 1025px) { 
    padding: 0.5rem;

    p {
        text-align: center;
    }
    }
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    gap: 0.7rem;
    
    img {
        height: 250px;
        border-radius: 50px;
        box-shadow: 4px 5px 4px 2px rgba(0,21,555);
        border: 3px solid rgba(9, 9, 121, 1);
        animation: ${float} 5s ease-in-out infinite ;
    }

    h3 {
        font-size: 1.5rem;

    }

    @media (max-width: 1025px) {
        img {
            animation: none;
        }
        
        h3 {
            font-size: 20px;
        }
    }
`

export const SubTitle = styled.h2`
    font-size: 2rem;

    @media (max-width: 1025px) { 
        font-size: 1.5rem;
    }
`