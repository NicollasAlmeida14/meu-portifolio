import styled from "styled-components";

export const Footer = styled.footer`
    background-color: rgba(26, 26, 46,0.7);
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-items: center;
    padding: 1rem;

    @media (max-width: 647px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }

    p {
        color: #ffffff;
        font-weight: 500;
        border-right: solid 1px #ffffff;
        padding-right: 1rem;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        align-items: center;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
    }

    button {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 1.7rem;
        cursor: pointer;
        display: flex;
    }
`