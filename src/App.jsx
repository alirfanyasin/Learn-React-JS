const Button = ({ variant, type, children }) => {
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
    <div className="flex items-center justify-center h-screen min-">
      <Button type="Submit" variant="bg-red-700">
        Test
      </Button>
    </div>
  );
}
