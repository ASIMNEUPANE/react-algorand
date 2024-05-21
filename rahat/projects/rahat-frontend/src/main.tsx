import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
      {/* <PlayGround /> */}
    </ErrorBoundary>
  </React.StrictMode>,
)