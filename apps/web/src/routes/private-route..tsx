import { ACCESS_TOKEN } from "@/constants"
import { Navigate, Outlet } from "react-router-dom"

export default function PrivateRoute() {
  const isLogin = !!localStorage.getItem(ACCESS_TOKEN)
  return isLogin ? <Outlet /> : <Navigate to="/auth" replace />
}
