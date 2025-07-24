import styled from "styled-components";

export const SandwichContainer = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        position: relative;
    }
`

export const SandwichIcon = styled.button`
    background: none;
    border: none;
    color: #ffffff;
    font-size: 2rem;
    display: flex;
`

export const Menu = styled.div`
    position: absolute;
    right: 0;
    top: 40px;
    padding: 1rem;
    background-color: rgba(26, 26, 46);
    border-radius: 10px;
    display: ${({ $open }) => $open ? 'flex' : 'none'};
    flex-direction: column;
    gap: 1rem;
    z-index: 10;
`

export const MenuItem = styled.p`
    margin: 0 auto;
    font-weight: bold;
` 