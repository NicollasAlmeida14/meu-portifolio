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

export const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    padding: 20px;

    span {
        color: #00F0FF;
    }

    @media (max-width: 1025px) {
        font-size: 2rem;
    }
`

export const ProjectsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem 4rem;
    margin-top: 30px;
    max-width: 1200px;

    p {
        font-size: 14px;
        line-height: 1.2rem;
    }

    @media (max-width: 1025px) { 
        grid-template-columns: repeat(2, 1fr);
        }

    @media (max-width: 550px) { 
        grid-template-columns: 1fr;
        }

`
export const ProjectCard = styled.div`
    background-color: #292933;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 4px 5px 4px 2px rgba(0,21,555);
    }

    div {
        padding: 1rem;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    Button {
        margin: 10px 0;
    }

    @media (max-width: 1285px) { 
           &:hover {
                transform: none;
                box-shadow: none;
            }
        }

`

export const SubTitle = styled.h2`
    font-size: 1.7rem;
    text-align: center;
    margin-bottom: 10px;

    @media (max-width: 1025px) { 
           font-size: 1.5rem;
        }
`