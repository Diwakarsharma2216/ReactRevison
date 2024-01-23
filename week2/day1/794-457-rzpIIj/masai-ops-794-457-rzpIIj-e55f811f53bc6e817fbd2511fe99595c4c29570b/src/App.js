import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
function App() {
  const [products, setProducts] = useState([]);



  const totalpricefun=()=>{
    let totalprice=0
    products.forEach((el)=>totalprice+=el.price*el.quantity)
 return totalprice
  }

  useEffect(()=>{
    if(data){
      setProducts(data)
    }
  },[])

  const handleQty = (id, payload) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + payload) }
          : product
      );
    });
  };

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {products.map((el, i) => (
          <Product
            key={el.id}
            name={el.name}
            price={el.price}
            quantity={el.quantity}
            id={el.id}
            handleQty={handleQty}
          />
        ))}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
       
       {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        Total:{totalpricefun()}
      </h1>
    </div>
  );
}

export default App;
