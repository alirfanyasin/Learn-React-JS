import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    title: "Camera Canon",
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    deserunt facilis placeat qui consequatur odit, voluptatum vel hic
    expedita quaerat.`,
    price: "600.000",
  },
  {
    id: 2,
    image: "/images/product-2.jpg",
    title: "Mackbook Pro M1",
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    deserunt facilis placeat qui consequatur odit.`,
    price: "23.000.000",
  },
];

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const email = localStorage.getItem("email");

const ProductPage = () => {
  return (
    <div>
      <div className="flex items-center justify-end w-full px-4 py-4 text-white bg-blue-900 container-lg">
        <span className="mr-3">{email}</span>
        <Button type="submit" onclick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="container flex justify-center py-5">
        {/* Nested Component */}
        {/* <CardProduct>
        <CardProduct.Header image="/images/product-1.jpg" />
        <CardProduct.Body title="Camera Canon">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deserunt facilis placeat qui consequatur odit, voluptatum vel hic
          expedita quaerat.
        </CardProduct.Body>
        <CardProduct.Footer price="570.000" />
      </CardProduct> */}

        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>

      <div className="flex justify-center w-full mt-5">
        <Counter></Counter>
      </div>
    </div>
  );
};

export default ProductPage;
