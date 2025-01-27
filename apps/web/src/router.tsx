import { createBrowserRouter } from "react-router-dom"
import Auth from "@/routes/auth"
import { ROUTES } from "@/constants"
import ErrorPage from "@/error-page"
import Todos from "./routes/todos"
import PrivateRoute from "./routes/private-route."

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [{ path: ROUTES.TODOS, element: <Todos /> }],
  },
  {
    path: ROUTES.AUTH,
    element: <Auth />,
  },
])
