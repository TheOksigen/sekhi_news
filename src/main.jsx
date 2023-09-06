import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/Router'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);