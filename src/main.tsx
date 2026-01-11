import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import Footer from '@/Footer'
import Header from '@/Header'
import Hamburger from '@/Hamburguer'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hamburger />
    <App />
    <Footer />
  </StrictMode>,
)
