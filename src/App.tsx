import { RouterProvider } from 'react-router-dom'
import { router } from '@/router/index';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
