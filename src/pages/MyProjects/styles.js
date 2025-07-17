import styled from "styled-components";

export const Container = styled.div`
        background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
        color: #fff;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-x: hidden;
`

export const ProjectsContainer = styled.div`
    padding-top: 6.5rem;
`
export const ProjectSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 40%;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 2rem 3rem;
    margin-bottom: 2rem;
`

export const ProjectDescriptionContainer = styled.div`
    background-color: #B0C4DE;
    padding: 0.8rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border: solid 3px #0000CD;
    color: #000080;
`

export const ProjectName = styled.h1`
    text-align: center;
    font-size: 2rem;
`

export const ProjectDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
`

export const ProjectFunctionalityContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-top: solid 1.5px #ffffff;
    padding-top: 1rem;
`

export const FunctionalityTitle = styled.h2`
    font-size: 1.58rem;
`

export const Ul = styled.ul`
    list-style: none;
    line-height: 1.7;
`

export const Li = styled.li`
    font-size: 1.2rem;
    font-weight: 300;
    display: flex;
    align-items: center;
    gap: 0.28rem;
`

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: solid 1.5px #ffffff;
    padding-top: 1rem;
    
    button {
        font-size: 1.1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.2rem;
        background: none;
        border: none;
        color: #000080;
        font-weight: 500;
        
        &:hover {
            color: #0000CD;
            transition: 0.3s ease;
        }

        &:active {
            opacity: 0.6;
        }
    }
`

export const ProjectShowcaseContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    img {
        height: 100%;
        border-radius: 10px;
    }
`

export const ToolsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    border-top: solid 1.5px #ffffff;
    padding-top: 1rem;
    align-items: center;

    div {
        display: flex;
        gap: 1rem;
      
        p {
            font-size: 3.5rem;
            display: flex;
            padding: 0.3rem;
            border-radius: 10px;
            transition: all 0.3s ease-in-out;

            &:hover {
                background: linear-gradient(135deg, #6F00FF, #00F0FF);
                transform: scale(1.1);
            }
        }
    }
`

export const ToolsTitle = styled.h2`
    font-size: 1.58rem;
`