import styled from "styled-components"

export const Button = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 20px;
    padding: 10px;
    width: 170px;
    font-size: 16px;
    font-weight: bold;
    background: ${props => props.theme === 'primary' ?
        'linear-gradient(135deg, #6F00FF, #00F0FF)' :
        '#fff'} ;
    color: ${props => props.theme === 'primary' ?
        '#fff' :
        '#000'} ;
        transition: all 0.3s ease;

    &:hover {
       ${props => props.theme === 'primary' ?
        'transform: translateY(-4px);  box-shadow: 0px 0px 10px 5px rgba(0,21,555)' :
        'opacity: 0.8 ; transition: none'} ;
    }

    &:active {
      ${props => props.theme === 'primary' ? 'transform: translateY(0)' : 'opacity: 0.6'}  ;
    }

    @media (max-width: 1025px) { 
           &:hover {
                box-shadow: none;
                transform: none;
            }

            &:active {
                transform: none;
            }
        }

`