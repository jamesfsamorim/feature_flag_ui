interface PaletteColors {
    primary: string
    secondary: string
    background: string
    text: string
}

interface PaddingSizes {
    default: string
}

export interface ThemeProps {
    colors: PaletteColors
    padding: PaddingSizes
}