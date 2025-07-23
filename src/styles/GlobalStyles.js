import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    }

    .swiper-button-next,.swiper-button-prev {
       
        &:hover {
            scale: 1.2;
            transition: all 0.3s ease-in-out;
        }

         &:active {
            scale: 1;
        }
    }
`