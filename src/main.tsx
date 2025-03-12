import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './home.tsx'
import './home.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
