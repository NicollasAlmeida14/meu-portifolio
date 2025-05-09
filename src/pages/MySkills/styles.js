import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const SubTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin: 10px 0 ;
`

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 1280px) { 
        grid-template-columns: 1fr;
    }
`

export const FrontEndContainer = styled.div`
    background-color: #292933;
    margin-top: 30px;
    border: solid ;
    border-radius: 10px;

    div {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 10px;
    }

    img {
        width: 200px;
        transition: all 0.5s ease;

        &:hover {
            transform: translateY(-10px) scale(1.05);
        }
    }

    @media (max-width: 1280px) {
        img{
            &:hover {
                transform: none;
                scale: 1;
            }
        }
    }

    @media (max-width: 650px) {
        div {
            grid-template-columns: repeat(2,1fr);
        }

        img {
            width: 150px; 
            transition: none;

            &:hover {
            transform: none;
            scale: 1;
            }
        }
    }
`

export const BackEndContainer = styled.div`
    background-color: #292933;
    margin-top: 30px;
    border: solid ;
    border-radius: 10px;

    div {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 10px;
    }

    img {
        width: 200px;
        transition: all 0.5s ease;

        &:hover {
            transform: translateY(-10px) scale(1.05);
        }
    }

    @media (max-width: 1280px) {
        img{
            &:hover {
                transform: none;
                scale: 1;
            }
        }
    }
    
    @media (max-width: 650px) { 
        div {
            grid-template-columns: repeat(2,1fr);
        }

        img {
            width: 150px; 
            transition: none;

            &:hover {
            transform: none;
            scale: 1;
            }
        }
    }
`