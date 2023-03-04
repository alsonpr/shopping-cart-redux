import './App.css';

import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, updateQuantity,removeAllProduct } from "./store/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.counter);
  

  const handleAddProduct = () => {
    const id = Math.floor(Math.random() * 1000);
    const name = "Product " + id;
    const price = Math.floor(Math.random() * 100);
    const quantity = 1
    dispatch(addProduct({ id, name, price, quantity }));
  };

  const handleRemoveProduct = (product) => {
    const quantity = product.quantity
    dispatch(removeProduct({ id: product.id, price:product.price, quantity }));
  };

  const handleAddQuantity = (product) => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: product.quantity + 1,
      })
    );
  };

  const handleRemoveQuantity = (product) => {
    dispatch(
      updateQuantity({
        id: product.id,
        quantity: product.quantity - 1,
      })
    );
  };

  const handleRemoveAll = () => {
    dispatch(
      removeAllProduct()
    );
  };

  return (
    <div className="App">
      <div>
        <h1>Product Cart</h1>
      </div>
      <section className="products">
        
          {products.map((product) => (
            <li key={product.id}>
              {product.name} ------ <b>Price: ${product.price}</b> ------ Quantity: <b>({product.quantity})</b>

              <div className='container'>
              <button className='button-red' onClick={() => handleRemoveProduct(product)}>Remove Product</button>
              <button className='button-green' onClick={() => handleAddQuantity(product)}>+</button>
              <button className='button-red' onClick={() => handleRemoveQuantity(product)}>-</button>
              </div>
              <hr className='faint'></hr>
            </li>
          ))}
       
        <h4>Total Price: ${total}</h4>
        <button className='button-green' onClick={handleAddProduct}>Add Product</button>
        <button className='button-red' onClick={handleRemoveAll}>Clear Cart</button>
        
      </section>
    </div>
  );
}

export default App;
