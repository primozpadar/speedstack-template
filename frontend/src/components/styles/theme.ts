const theme = {
  colors: {
    primary: '#dddddd',
  },
}

// generates type ThemeType from theme object
export type ThemeType = typeof theme

// declaration of DefaultTheme for further use in styled components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export default theme
