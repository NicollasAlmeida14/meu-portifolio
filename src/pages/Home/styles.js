import styled, { keyframes } from "styled-components";

const float = keyframes`
    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(20px);
    }
`

export const Container = styled.div`
    background: linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    background-color: rgba(26, 26, 46, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1020px) { 
        display: none;
    }
`

export const Nav = styled.nav`
    background-color: rgba(26, 26, 46, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
        height: 60px;
        cursor: pointer;
        padding: 0.5rem 0;

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }

        @media (max-width: 1025px) { 
            &:hover, &:active {
            opacity: 1;
            }
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

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    margin: 30px 0;
    gap: 1rem;
    padding: 1rem;

    @media (max-width: 1020px) { 
        grid-template-columns: 1fr;
        align-items: center;
    }
`

export const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;

    @media (max-width: 1025px) { 
    padding: 0.5rem;

    p {
        text-align: center;
    }
    }
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    gap: 0.7rem;
    
    img {
        height: 250px;
        border-radius: 50px;
        box-shadow: 4px 5px 4px 2px rgba(0,21,555);
        border: 3px solid rgba(9, 9, 121, 1);
        animation: ${float} 5s ease-in-out infinite ;
    }

    h3 {
        font-size: 1.5rem;

    }

    @media (max-width: 1025px) {
        img {
            animation: none;
        }
        
        h3 {
            font-size: 20px;
        }
    }
`

export const Form = styled.form`
    min-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 25px;
    border-radius: 20px;
    background-color: rgba(26, 26, 46, 0.9);
    position: fixed;
    bottom: ${({ $show }) => ($show ? '150px' : '-270px')};
    transform: translateX(-50%);
    left: 50%;
    transition: bottom 1s ease-in-out;
    border:2px solid #00F0FF;
    box-shadow: 0px 0px 10px 5px rgba(0,21,555);

    @media (max-width: 1370px) {
    min-width: 90%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    min-width: 95%;
    padding: 15px;
  }
`

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border:2px solid #292933;
    outline: none;

    &:focus {
        border:2px solid #00F0FF;
        box-shadow: 0px 0px 10px 5px rgba(0,21,555)
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    border-radius: 8px;
    padding: 8px;
    border:2px solid #292933;
    outline: none;

    &:focus {
        border:2px solid #00F0FF;
        box-shadow: 0px 0px 10px 5px rgba(0,21,555)
    }
`

export const SubTitle = styled.h2`
    font-size: 2rem;

    @media (max-width: 1025px) { 
        font-size: 1.5rem;
    }
`