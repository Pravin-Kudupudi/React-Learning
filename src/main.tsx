import 'primereact/resources/themes/lara-light-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import store from './store.ts';

import App from './App.tsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)
  root.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  )
