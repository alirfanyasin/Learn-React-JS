import React from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Name" type="text" placeholder="Jhon Doe" name="name" />
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="******"
        name="confirm_password"
      />
      <Button classname="w-full bg-blue-600" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
