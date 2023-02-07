import ReactDOM from 'react-dom/client'
import './styles/base.css'
import 'antd/dist/antd.min.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './store/index'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

