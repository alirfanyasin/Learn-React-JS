import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="container flex justify-center py-5">
      {/* Nested Component */}
      <CardProduct>
        <CardProduct.Header image="/images/product-1.jpg" />
        <CardProduct.Body title="Camera Canon">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deserunt facilis placeat qui consequatur odit, voluptatum vel hic
          expedita quaerat.
        </CardProduct.Body>
        <CardProduct.Footer price="570.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/product-2.jpg" />
        <CardProduct.Body title="Mackbook Pro M1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deserunt facilis
        </CardProduct.Body>
        <CardProduct.Footer price="15.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductPage;
