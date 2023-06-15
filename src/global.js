import { createGlobalStyle } from "styled-components";
import Cafe24Ssurrount from "../public/font/Cafe24Ssurround.eot";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Cafe24Ssurround';
    src: url(${Cafe24Ssurrount}) format('truetype');
} 
`;

export default GlobalStyle;
