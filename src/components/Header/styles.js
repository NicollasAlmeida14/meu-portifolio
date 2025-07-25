import styled from "styled-components";

export const Header = styled.header`
    background-color: rgba(26, 26, 46);
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1000;

    img {
        width: 80px;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;

        &:hover {
            box-shadow: 0px 0px 10px 5px rgba(0,21,555);
        }

        @media (max-width: 1024px) {
            &:hover {
                box-shadow: none;
            }
        }
    }
`

export const Links = styled.p`
    cursor: pointer;
    position: relative;
    color: #ffffff;

    &::after {
        content: '';
        width: 0;
        background: linear-gradient(135deg, #6F00FF, #00F0FF);
        height: 2px;
        bottom: 0;
        left: 0;
        position: absolute;
        transition: width 0.5s ease;
    }

    &:hover::after {
        width: 100%;
    }

    &:active{
        opacity: 0.6;
    }
`

export const Ul = styled.ul`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) { 
        display: none;
    }
`

export const Li = styled.li`
    list-style: none;
`

export const SocialMediaButton = styled.button`
    background: none;
    border: none;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    display: flex;
    padding: 0.3rem;
    border-radius: 10px;

    &:hover {
        background: linear-gradient(135deg, #6F00FF, #00F0FF);
        transform: translateY(-5px);
        transition: 0.3s ease-in-out;
    }

    &:active {
        transform: translateY(0);
    }
`

export const DownloadCurriculumLink = styled.p`
    cursor: pointer;
    position: relative;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 0.2rem;

    &::after {
        content: '';
        width: 0;
        background: linear-gradient(135deg, #6F00FF, #00F0FF);
        height: 2px;
        bottom: 0;
        left: 0;
        position: absolute;
        transition: width 0.5s ease;
    }

    &:hover::after {
        width: 100%;
    }

    &:active{
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        display: none;
    }
`