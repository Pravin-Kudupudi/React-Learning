import 'primereact/resources/themes/lara-light-amber/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import store from './store.ts';

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.tsx';
import Form from './components/Basic-Form-with-validation/FormDemo.tsx';
import Counter from './components/React-Redux/ReduxDemo.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },
  {
    path: "/form",
    element: <Form></Form>
  },
  {
    path: "/redux",
    element: <Counter></Counter>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root')!)
  root.render(
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>,
  )
