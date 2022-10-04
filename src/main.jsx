import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import Salon from './components/Salon'
// Global Styles
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="salon/*" element={<Salon />} />
      </Routes>
      <GlobalStyles />
    </Router>
  </React.StrictMode>
)
