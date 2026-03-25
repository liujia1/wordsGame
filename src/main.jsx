import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SentenceGame from './components/SentenceGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SentenceGame />
  </StrictMode>,
)
