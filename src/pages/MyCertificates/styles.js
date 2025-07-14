import styled, { keyframes } from "styled-components";

const boxShadowEffect = keyframes`
    0%, 100% {
        box-shadow: none;
    }

    50% {
        box-shadow: 4px 5px 4px 2px rgba(0,21,555);
        transform:  scale(1.05);
    }
`

export const Container = styled.div`
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const CertificatesContainer = styled.div`
    padding-top: 6.5rem;
`
export const CertficateSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 30%;
    align-items: center;
    gap: 2rem;
    padding: 4rem 1.5rem 5.5rem;
    margin-bottom: 3.2rem;

    img {
        width: 100%;
        border-radius: 10px;
        animation: ${boxShadowEffect} 3s infinite ease;
    }
`

export const CertificateDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CertificateDescription = styled.p`
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
`

export const RealizatedProjects = styled.p`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;
`