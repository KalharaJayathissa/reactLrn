import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Ahh from './ahh.tsx'
import Kxy from './newText.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    <Ahh/>
    <Kxy/>
  </StrictMode>,
)
