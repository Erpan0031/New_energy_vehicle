import Redirect from "./Redirect";
const AuthComponent = ({ children }: any) => {
  const isLogin = localStorage.getItem("token");
  return isLogin ? children : <Redirect to="/login" />;
};

export default AuthComponent;
