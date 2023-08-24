import Button from "../Elements/Button/Index";

const CardProduct = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full max-w-xs p-8 mx-2 mb-4 rounded-lg shadow bg-gradient-to-tr from-sky-700 to-blue-900">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return <img src={image} alt="Product" className="rounded-lg" />;
};

const Body = ({ title, children }) => {
  return (
    <div className="h-full mt-5 text-white">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-3">{children}</p>
    </div>
  );
};

const Footer = ({ price, addToCart, id }) => {
  return (
    <div className="flex items-center justify-between mt-5">
      <span className="font-semibold text-white text-md">
        Rp.{" "}
        {price.toLocaleString("id-ID", {
          styles: "currency",
          currency: "IDR",
        })}
      </span>
      <Button
        classname="text-blue-900 bg-white hover:bg-slate-200"
        onclick={() => addToCart(id)}
      >
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
