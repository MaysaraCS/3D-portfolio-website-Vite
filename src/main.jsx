import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key from env
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '8yzn19HK3iuG3sNC9'
if (emailJsPublicKey) {
  emailjs.init({ publicKey: emailJsPublicKey })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
