import { useContext } from "react"
import { AppContext } from "./state/AppContext"
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { state } = useContext(AppContext);

  if (!state.isUserLogged) {
    return <Navigate to='/auth' replace />
  }

  return children;
}