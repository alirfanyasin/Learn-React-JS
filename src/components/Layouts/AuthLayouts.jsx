import React from "react";

const AuthLayouts = ({ title, children }) => {
  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-2 text-3xl font-bold text-blue-600">{title}</h1>
      <p className="mb-8 font-medium text-slate-500">
        Welcome, Please enter yout email & password
      </p>

      {children}
    </div>
  );
};

export default AuthLayouts;
