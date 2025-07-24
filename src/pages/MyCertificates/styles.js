import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const CertificatesContainer = styled.div`
    padding-top: 6.8rem;
`
export const CertficateSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 30%;
    align-items: center;
    gap: 2rem;
    padding: 5rem 1.5rem 6rem;
    margin-bottom: 3.5rem;

    img {
        width: 100%;
        border-radius: 10px;
    }

    @media (max-width: 940px) {
        display: flex;
        flex-direction: column;
        padding: 2.5rem 1rem 4rem;
        margin-bottom: 0;

        img {
            width: 80%;
        }
    }
`

export const CertificateDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const CertificateDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

export const RealizatedProjects = styled.p`
    text-align: center;
    font-size: 1.1rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`