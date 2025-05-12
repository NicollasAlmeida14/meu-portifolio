import styled from "styled-components"

export const DynamicTitle = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    padding: 20px;

    @media (max-width: 1025px) {
        font-size: 2rem;
    }
`