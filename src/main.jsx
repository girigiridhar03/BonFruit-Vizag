import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import {Provider as ReduxProvider} from 'react-redux'
import './index.css'
import store from './Store/store.js'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <BrowserRouter>
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
