interface PaletteColors {
    primary: string
    secondary: string
    background: string
    text: string
}

interface Sizes {
    small: string
    default: string
}

interface FontProps {
    family: string
    sizes: Sizes
    weight: Sizes
}

export interface ThemeProps {
    colors: PaletteColors
    paddings: Sizes
    fonts: FontProps
}