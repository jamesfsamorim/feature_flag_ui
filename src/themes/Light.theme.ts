import {ThemeProps} from "./Types.theme";

const lightTheme: ThemeProps = {
    colors: {
        primary: '#dedede',
        secondary:'#f5f5f5',
        background: '#ffffff',
        text: '#1b1c20',
    },
    paddings: {
        small: '10px',
        default: '20px'
    },
    fonts: {
        family: 'Industry, sans-serif',
        sizes: {
            default: '12px',
            small: '8px',
        },
        weight: {
            default: '500',
            small: '300',
        }
    }
}

export default lightTheme