import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />

      <p className="my-3 text-center">
        Don't have an accout?{" "}
        <Link to="/register" className="font-semibold text-blue-700">
          Register
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
