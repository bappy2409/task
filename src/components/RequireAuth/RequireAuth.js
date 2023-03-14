import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  if (user) {
    return children;
  } else return <Navigate to="/login" />;
};
export default RequireAuth;
