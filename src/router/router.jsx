import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Inicio from '../pages/inicio/Inicio'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Inicio />
            }
        ]
    }
])