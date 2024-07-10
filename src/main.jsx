import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import QuestionsProvider from './components/QuestionsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuestionsProvider>
    <App />
    </QuestionsProvider>
  </React.StrictMode>,
)
