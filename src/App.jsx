import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <LoginPage></LoginPage> */}
      <RegisterPage></RegisterPage>
    </div>
  );
}
