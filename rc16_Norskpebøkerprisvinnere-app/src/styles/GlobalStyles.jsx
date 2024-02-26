//create global styles

import { createGlobalStyle } from "styled-components";}

export const GlobalStyles = createGlobalStyle  `


* {
    margin :0;
    padding:0;
    box-sizing: border-box;
    text-transform: uppercase;
    font-family: 
   }
   
   body {
       background-color:  ${({theme}) => theme.colors.mainColor}
    }






`;
