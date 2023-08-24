// Menggunakan Functional Component (Stateless Component)
const Button = ({
  classname = "bg-black",
  type = "button",
  children = "Button",
  onclick,
}) => {
  return (
    <button
      type={type}
      className={`h-10 px-6 font-semibold rounded-lg ${classname} text-white`}
      onClick={onclick}
    >
      {children}
    </button>
  );
};

// Menggunakan Class Component (Statefull Component)
// class ButtonCls extends React.Component {
//   render() {
//     return (
//       <button
//         type="Submit"
//         className={`h-10 px-6 font-semibold rounded-lg bg-red-700 text-white`}
//       >
//         This is Button
//       </button>
//     );
//   }
// }

export default Button;
