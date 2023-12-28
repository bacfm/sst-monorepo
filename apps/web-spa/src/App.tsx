import { ThemeProvider, Typography, theme } from '@platform/web-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography data-testid="app-title">Sample APP</Typography>
    </ThemeProvider>
  )
}

export default App
