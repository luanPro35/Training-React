import { useSelector, useDispatch, Provider } from "react-redux";
import { shoppingActions } from "./redux/Shopping";
import store from "./redux/Shopping";
const ShoppingDisplay = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shopping.items);
  const totalQuantity = useSelector((state) => state.shopping.totalQuantity);

  const handleAddItem = (item) => {
    dispatch(shoppingActions.addItem(item));
  };

  const handleRemoveItem = (id) => {
    dispatch(shoppingActions.remove(id));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(shoppingActions.incrementQuantity(id));
  };

  const handleDecrementQuantity = (id) => {
    dispatch(shoppingActions.decrementQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(shoppingActions.clearCart());
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <p className="mb-2">
        Total Quantity: <span className="font-semibold">{totalQuantity}</span>
      </p>
      <button
        onClick={handleClearCart}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="list-disc pl-5">
          {cartItems.map((item) => (
            <li key={item.id} className="mb-2 flex items-center space-x-2">
              <span className="flex-grow">
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <button
                onClick={() => handleIncrementQuantity(item.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                +
              </button>
              <button
                onClick={() => handleDecrementQuantity(item.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              >
                -
              </button>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* Example of how to add an item (you would typically get this from a product list) */}
      <button
        onClick={() =>
          handleAddItem({ id: 1, name: "Test Item", price: 10, quantity: 1 })
        }
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Test Item
      </button>
    </div>
  );
};

const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <h1>ShoppingCart</h1>
      <ShoppingDisplay />
    </Provider>
  );
};

export default ShoppingCart;
