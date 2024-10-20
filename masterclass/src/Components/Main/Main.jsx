import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

function Main() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  return (
    <main>
      <div className="container">
        <h3>Blockbuster deals with exchange</h3>
        <div className="grid__container">
          {products &&
            products.map((item) => {
              return <Card item={item} />;
            })}
        </div>
      </div>
    </main>
  );
}

export default Main;
