import Button from "../Elements/Button/Index";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm p-8 mx-2 rounded-lg shadow bg-gradient-to-tr from-sky-700 to-blue-900">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return <img src={image} alt="Product" className="rounded-lg" />;
};

const Body = ({ title, children }) => {
  return (
    <div className="mt-5 text-white">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3">{children}</p>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <span className="text-2xl font-semibold text-white">Rp. {price}</span>
      <Button classname="text-blue-900 bg-white hover:bg-slate-200">
        Add to Cart
      </Button>
    </div>
  );
};

// Nested Component
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
