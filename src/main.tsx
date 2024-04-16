import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import { Layout } from './components/Layout'
import { AppProvider } from './state/AppContext'
import { ProtectedRoute } from './ProtectedRoute'

const router = createHashRouter([
  {
    path: '',
    Component: Layout,
    children: [
      {
        path: '',
        element: <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      },
      {
        path: 'auth',
        Component: Auth
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
