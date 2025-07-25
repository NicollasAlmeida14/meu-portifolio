import styled, {keyframes} from "styled-components";

const certificateAnimation = keyframes`
    0%, 100% {
        transform: scale(0.9);
    }

    50% {
        transform: scale(1);
        box-shadow: -1px 2px 12px 7px rgba(0,0,0,0.75);
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
    padding-top: 6.8rem;
`
export const CertficateSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 30%;
    align-items: center;
    gap: 2rem;
    padding: 3rem 1.5rem 2rem;
    margin-bottom: 2rem;

    img {
        width: 100%;
        border-radius: 10px;
        animation: ${certificateAnimation} ease-in-out 3s infinite;
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