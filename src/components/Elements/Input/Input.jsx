const Input = ({ type, placeholder, name}) => {
  return (
    <input
      type={type}
      className="w-full px-3 py-2 text-sm border rounded text-slate-700 placeholder:opacity-50"
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
