import { useState } from "react";
import Button from "../components/Elements/Button/Index";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/product-1.jpg",
    title: "Camera Canon",
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    deserunt facilis placeat qui consequatur odit, voluptatum vel hic
    expedita quaerat.`,
    price: 600000,
  },
  {
    id: 2,
    image: "/images/product-2.jpg",
    title: "Mackbook Pro M1",
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    deserunt facilis placeat qui consequatur odit.`,
    price: 230000,
  },
  {
    id: 3,
    image: "/images/product-2.jpg",
    title: "Laptop",
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    deserunt facilis placeat qui consequatur odit.`,
    price: 450000,
  },
  {
    id: 4,
    image: "/images/product-2.jpg",
    title: "Computer",
    description: ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
    deserunt facilis placeat qui consequatur odit.`,
    price: 100000,
  },
];

const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const email = localStorage.getItem("email");

const ProductPage = () => {
  // state
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

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

        <div className="flex flex-wrap w-3/4">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                addToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>

        <div className="w-1/4">
          <h2 className="text-3xl font-bold text-blue-600">Cart</h2>

          <table
            cellPadding="5px"
            className="text-left border-separate border-spaceing-x-5"
          >
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find((p) => p.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td className="text-center">{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
