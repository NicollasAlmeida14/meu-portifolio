import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const SkillsContainer = styled.main`
    padding-top: 6.5rem;
`

export const SkillsSection = styled.section`
    margin: 1rem 0 7.5rem;
    background-color: #364F6B;
    padding: 1rem;
    color: #ffffff;
`

export const Title = styled.h1`
    font-size: 2.1rem;
    text-align: center;

    @media (max-width: 860px) {
        font-size: 1.7rem;
    }
`

export const ToolContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem;

    div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;
        padding: 1rem;
        width: 50%;

        @media (max-width: 768px) {
            display: none;
        }
    }
`

export const ToolName = styled.h2`
    font-size: 1.8rem;

    @media (max-width: 860px) {
        font-size: 1.4rem;
    }
`

export const ToolDescription = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    text-align: center;

    @media (max-width: 860px) {
        font-size: 1rem;
    }
`