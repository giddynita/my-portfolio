import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContext from './assets/globalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppContext>
    <App />
  </AppContext>
)
