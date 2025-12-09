import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "./Redux/CartSlice";

const FoodMenu = () => {
  const [qty, setQty] = useState({}); // 🔥 local qty state (per item)
  const dispatch = useDispatch();

  const foodItems = [
    { id: 1, name: "Pizza", price: 199, img: "https://images.pexels.com/photos/1596884/pexels-photo-1596884.jpeg" },
    { id: 2, name: "Burger", price: 99, img: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg" },
    { id: 3, name: "Pasta", price: 149, img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" },
    { id: 4, name: "French Fries", price: 79, img: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg" },
    { id: 5, name: "Sandwich", price: 89, img: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg" },
    { id: 6, name: "Noodles", price: 129, img: "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg" },
    { id: 7, name: "Momos", price: 99, img: "https://images.pexels.com/photos/7887805/pexels-photo-7887805.jpeg" },
    { id: 8, name: "Dosa", price: 120, img: "https://images.pexels.com/photos/14359065/pexels-photo-14359065.jpeg" },
    { id: 9, name: "Chole Bhature", price: 140, img: "https://images.pexels.com/photos/10019257/pexels-photo-10019257.jpeg" },
    { id: 11, name: "Fried Rice", price: 130, img: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" },
    { id: 12, name: "Paneer Tikka", price: 180, img: "https://images.pexels.com/photos/9609845/pexels-photo-9609845.jpeg" },
    { id: 14, name: "Cold Coffee", price: 110, img: "https://images.pexels.com/photos/1616159/pexels-photo-1616159.jpeg" }
  ];

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

  // 🟦 Swiggy-like quantity box styles
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


  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          width: "90vw",
        }}
      >
        {foodItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "50px",
            }}
          >
            {/* LEFT SIDE */}
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: "70px",
                  height: "70px",
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
  );
};

export default FoodMenu;
