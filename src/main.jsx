import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { AppRoutes } from './routes'
import { AuthProvider } from './hooks/auth'
import { SearchProvider } from './contexts/SearchContext' // ✅ Importação

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <SearchProvider> 
          <AppRoutes />
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
