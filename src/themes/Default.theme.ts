import {ThemeProps} from "./Types.theme";

const defaultTheme: ThemeProps = {
    colors: {
        primary: '#1b1c20',
        secondary:'#282d30',
        background: '#0d0d0f',
        text: '#ffffff',
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

export default defaultTheme