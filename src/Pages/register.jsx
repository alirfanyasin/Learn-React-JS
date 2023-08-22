import AuthLayouts from "../components/Layouts/AuthLayouts";
import FormRegister from "../components/Fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="my-3 text-center">
        Already your have an accout?{" "}
        <Link to="/login" className="font-semibold text-blue-700">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
