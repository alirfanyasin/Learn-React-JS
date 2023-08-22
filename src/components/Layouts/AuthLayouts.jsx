import React from "react";
import { Link } from "react-router-dom";

const AuthLayouts = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
        <p className="mb-8 font-medium text-slate-500">
          Welcome, Please enter yout email & password
        </p>

        {children}

        {/* Conditional Rendering */}
        {title === "Login" && (
          <p className="my-3 text-center">
            Don't have an accout?{" "}
            <Link to="/register" className="font-semibold text-blue-700">
              Register
            </Link>
          </p>
        )}

        {title === "Register" && (
          <p className="my-3 text-center">
            Already have an accout?{" "}
            <Link to="/login" className="font-semibold text-blue-700">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthLayouts;
