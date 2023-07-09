import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

// import App from './App.tsx'
import { CheersApp } from './CheersApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CheersApp />
  </React.StrictMode>,
)
