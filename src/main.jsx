import ReactDOM from 'react-dom/client'
import App_46 from './App_46.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={new QueryClient()}>
    <App_46 />
  </QueryClientProvider >,
)
