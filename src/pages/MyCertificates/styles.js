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

export const CertificatesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem 4rem;
    max-width: 1200px;
    margin-top: 30px;

    @media (max-width: 1025px) {
        grid-template-columns: 1fr;
    }
`

export const CerticateCard = styled.div`
    background-color: #292933;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease;

    &:hover {
        transform: translateY(-10px) scale(1.05);
        box-shadow: 4px 5px 4px 2px rgba(0,21,555);
    }

    img {
    width:100%;
    object-fit: cover;
    }

    @media (max-width: 1025px) { 
           &:hover {
                transform: none;
                box-shadow: none;
            }
        }

`

export const SubTitle = styled.h2`
    font-size: 2rem;
    padding: 1rem;
    text-align: center;
`