import React from "react";

// Menggunakan Class Component (Statefull Component)
class ButtonCls extends React.Component {
  render() {
    return (
      <button
        type="Submit"
        className={`h-10 px-6 font-semibold rounded-lg bg-red-700 text-white`}
      >
        This is Button
      </button>
    );
  }
}

// Menggunakan Functional Component (Stateless Component)
const Button = ({
  variant = "bg-black",
  type = "button",
  children = "Button",
}) => {
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-lg ${variant} text-white`}
    >
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div className="flex items-center justify-center h-screen min-100">
      <ButtonCls></ButtonCls>
      <Button type="Submit" variant="bg-slate-700">
        Test
      </Button>
      <Button type="Submit">Test</Button>
      <Button type="Submit"></Button>
    </div>
  );
}
