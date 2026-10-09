import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './Context/AuthContext.tsx'
import { StyleProvider } from '@ant-design/cssinjs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <StyleProvider layer>
    <AuthProvider>
    <App />
    </AuthProvider>
    </StyleProvider>
</BrowserRouter>
  </StrictMode>,
)
