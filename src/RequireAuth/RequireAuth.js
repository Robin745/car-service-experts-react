import { Navigate, useLocation} from "react-router-dom";
import useFirebase from "../hook/useFirebase";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useFirebase();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>;
  }

  return children;
};
export default RequireAuth;
