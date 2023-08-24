import CardProduct from "../components/Fragments/CardProduct";

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

const ProductPage = () => {
  return (
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
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
