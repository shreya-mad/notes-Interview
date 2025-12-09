import React ,{useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./Redux/CartSlice";

function Navbar() {
  const cartItems = useSelector((store) => store.cart.items);
  const [showModal, setShowModal] = React.useState(false);
const [qty, setQty] = useState({});
  const dispatch = useDispatch(); 
console.log(cartItems);

  const addToCart = (item) => {
    dispatch(addItem(item));

    setQty((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const decreaseQty = (item) => {
    dispatch(removeItem(item));

    setQty((prev) => {
      const newQty = prev[item.id] - 1;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[item.id]; // reset to show + button
        return updated;
      }
      return { ...prev, [item.id]: newQty };
    });
  };

  const HandleClearCart=()=>{
  dispatch(clearCart());
  }

  const addBtnStyle = {
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "22px",
  fontWeight: "600",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 1px 4px rgba(0,0,0,0.12)",
};
  const qtyBox = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  border: "1px solid #ddd",
  borderRadius: "25px",
  padding: "6px 12px",
  background: "#fff",
  boxShadow: "0px 1px 4px rgba(0,0,0,0.12)",
};
const qtyBtn = {
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "20px",
  fontWeight: "600",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  };

  const modalBox = {
    background: "white",
    padding: "20px",
    width: "800px",
    height:"550px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  };

  return (
    <div style={{ position: "sticky", top: 0 }}>
      <style>{`
        .nav {
          height: 60px;
          background: #d4cece;
          border-bottom: 1px solid #eee;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          position: sticky;
          top: 0;
          z-index: 10;
          width:95vw;
        }

        .nav__logo {
          font-size: 1.3rem;
          font-weight: 700;
          color:black;
        }

        .nav__links {
          list-style: none;
          display: flex;
          gap: 20px;
          color:black;
          margin: 0;
          padding: 0;
          font-size: 0.95rem;
        }

        .nav__links li {
          cursor: pointer;
        }

        .nav__links li:hover {
          text-decoration: underline;
        }

        .nav__cart {
          position: relative;
          border: none;
          outline: none;
          background: #ff6b00;
          color: white;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .nav__cart:hover {
          opacity: 0.9;
        }

        .nav__cart-badge {
          position: absolute;
          top: -6px;
          right: -6px;
          background: green;
          color: white;
          border-radius: 999px;
          font-size: 0.65rem;
          padding: 2px 6px;
          min-width: 18px;
          text-align: center;
        }
      `}</style>

      <nav className="nav">
        <div className="nav__logo">🍕 FoodieZone</div>

        <ul className="nav__links">
          <li>Home</li>
          <li>Menu</li>
          <li>Offers</li>
          <li>Contact</li>
        </ul>

        <button className="nav__cart" onClick={() => setShowModal(true)}>
          🛒 Cart
          {cartItems.length > 0 && (
            <span className="nav__cart-badge">{cartItems.length}</span>
          )}
        </button>
      </nav>

      {/* MODAL */}
      {showModal && (
        <div style={modalOverlay} onClick={() => setShowModal(false)}>
          <div style={modalBox} onClick={(e) => e.stopPropagation()}>
            <div style={{ 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center",
  marginBottom: "10px"
}}>
  <span><h2 style={{ margin: 0 }}>Your Cart </h2>
  {cartItems.length} Items</span>

  {cartItems.length > 0 && (
    <button 
      style={{
        backgroundColor: "red",
        color: "white",
        borderRadius: "5px",
        border: "none",
        padding: "6px 10px",
        cursor: "pointer"
      }}
     onClick={() => HandleClearCart()}
    >
      Clear Cart
    </button>
  )}
</div>

            {cartItems.length === 0 ? (
              <p>No items added yet.</p>
            ) : (
                 <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gap: "20px",
           maxHeight: "400px",
  overflowY: "auto",
  scrollBehavior: "smooth",     // ⭐ Smooth auto scroll
  paddingRight: "6px",
        }}
      >
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "30px",
            }}
          >
            {/* LEFT SIDE */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <div>
                <h3 style={{ margin: 0, fontSize: "18px" }}>{item.name}</h3>
                <p style={{ margin: 0, fontSize: "16px", color: "#444" }}>₹{item.price}</p>
              </div>
            </div>

            {/* RIGHT SIDE BUTTONS */}
            {qty[item.id] ? (
  <div style={qtyBox}>
    <button style={qtyBtn} onClick={() => decreaseQty(item)}>-</button>
    <span style={{ fontSize: "18px", fontWeight: "600" }}>
      {qty[item.id]}
    </span>
    <button style={qtyBtn} onClick={() => addToCart(item)}>+</button>
  </div>
) : (
  <button
    onClick={() => addToCart(item)}
    style={addBtnStyle}
  >
    +
  </button>
)}

          </div>
        ))}
      </div>
    </div>
            )}

            <button
              style={{
                marginTop: "15px",
                padding: "8px 16px",
                background: "black",
                color: "white",
                borderRadius: "6px",
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
