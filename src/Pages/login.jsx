import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
