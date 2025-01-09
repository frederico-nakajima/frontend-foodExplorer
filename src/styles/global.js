import {createGlobalStyle} from 'styled-components';
import {DEVICE_BREAKPOINTS} from './deviceBreakpoints'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :hoot{
        font-size: 62.5%
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_1000};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing:antialiased;
    }

    border-style:-ms-input-placeholder,button,textarea{
        font-family: "Roboto", serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button,a{
        cursor: pointer;
        transition: filter 0.2;

    }

    button:hover,a:hover{
        filter: brightness(0.9);

    }

`