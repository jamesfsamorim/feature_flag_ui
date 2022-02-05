import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: uppercase;
  }
  body {
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
  }
  h5 {
    font-size: ${({theme}) => theme.fonts.sizes.default};
    font-family: ${({theme}) => theme.fonts.family};
    font-style: normal;
    font-weight: ${({theme}) => theme.fonts.weight.default};
    letter-spacing: 2px;
  }
  h6 {
    font-size: ${({theme}) => theme.fonts.sizes.default};
    font-family: ${({theme}) => theme.fonts.family};
    font-style: normal;
    font-weight: ${({theme}) => theme.fonts.weight.small};
  }
  
  @font-face {
    font-family: 'Industry';
    src: url('./fonts/Industry-Light.eot');
    src: local('Industry Light'), local('Industry-Light'),
    url('./fonts/Industry-Light.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Industry-Light.woff') format('woff'),
    url('./fonts/Industry-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Industry';
    src: url('./fonts/Industry-Bold.eot');
    src: local('Industry Bold'), local('Industry-Bold'),
    url('./fonts/Industry-Bold.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Industry-Bold.woff') format('woff'),
    url('./fonts/Industry-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Industry';
    src: url('./fonts/Industry-BoldItalic.eot');
    src: local('Industry Bold Italic'), local('Industry-BoldItalic'),
    url('./fonts/Industry-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Industry-BoldItalic.woff') format('woff'),
    url('./fonts/Industry-BoldItalic.ttf') format('truetype');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Industry';
    src: url('./fonts/Industry-Medium.eot');
    src: local('Industry Medium'), local('Industry-Medium'),
    url('./fonts/Industry-Medium.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Industry-Medium.woff') format('woff'),
    url('./fonts/Industry-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Industry';
    src: url('./fonts/Industry-MediumItalic.eot');
    src: local('Industry Medium Italic'), local('Industry-MediumItalic'),
    url('./fonts/Industry-MediumItalic.eot?#iefix') format('embedded-opentype'),
    url('./fonts/Industry-MediumItalic.woff') format('woff'),
    url('./fonts/Industry-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }
`

export default GlobalStyle