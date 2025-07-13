import styled from "styled-components";

export const Header = styled.header`
    background-color: rgba(26, 26, 46, 0.5);
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
        width: 80px;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;

        &:hover {
            box-shadow: 0px 0px 10px 5px rgba(0,21,555);
        }
    }
`

export const Links = styled.p`
    cursor: pointer;
    position: relative;

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

    @media (max-width: 1025px) { 
        &:hover::after {
            width: 0;
        }

        &:active{
            opacity: 1;
        }
    }
`

export const Ul = styled.ul`
    display: flex;
    gap: 1rem;

    @media (max-width: 1020px) { 
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: center;   
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
        transition: all 0.3s ease-in-out;
    }

     &:active {
        opacity: 0.6;
    }
`