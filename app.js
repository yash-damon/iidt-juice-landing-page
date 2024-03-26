const App = () => {
  return (
    <div className="container">
      <h1 className="heading">Shopping Cart</h1>
      <div className="image-container">
        <div>
          <img src="apple-juice.jpg" alt="Apple Juice" />
          <p className="label">Apple Juice</p>
          <p className="subheading">250ml</p>
          <span className="vegetarian-symbol">V</span>
        </div>
        <div>
          <img src="grape-juice.jpg" alt="Grape Juice" />
          <p className="label">Grape Juice</p>
          <p className="subheading">250ml</p>
          <span className="vegetarian-symbol">V</span>
        </div>
      </div>
      <div className="quantity-container">
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <div className="price">
        <p>Apple Juice Price</p>
        <p className="label">Rs.250</p>
        <p className="save-for-later">
          Save for later <u className="remove">remove</u>
        </p>
      </div>
      <div className="price">
        <p>Grape Juice Price</p>
        <p className="label">Rs.250</p>
        <p className="save-for-later">
          Save for later <u className="remove">remove</u>
        </p>
      </div>
      <div className="subtotal">
        <p>Subtotal</p>
        <p className="label">2 items</p>
        <p className="label">Rs.500</p>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));




