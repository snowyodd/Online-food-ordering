import { useState } from "react";
import axios from "axios";
import restaurants from "./menu";
import "./App.css";

function App() {
    const [selected, setSelected] = useState("");
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const exists = cart.find(i => i.name === item.name);

        if (exists) {
            setCart(cart.map(i =>
                i.name === item.name ? { ...i, qty: i.qty + 1 } : i
            ));
        } else {
            setCart([...cart, { ...item, qty: 1 }]);
        }
    };

    const increaseQty = (name) => {
        setCart(cart.map(i =>
            i.name === name ? { ...i, qty: i.qty + 1 } : i
        ));
    };

    const decreaseQty = (name) => {
        setCart(cart
            .map(i => i.name === name ? { ...i, qty: i.qty - 1 } : i)
            .filter(i => i.qty > 0)
        );
    };

    const checkout = async () => {
        if (cart.length === 0) {
            alert("Cart is empty!");
            return;
        }

        let total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

        await axios.post("http://localhost:5000/order", {
            items: cart,
            total
        });

        alert("Order placed successfully!");
        setCart([]);
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>🍽 FoodFlow</h1>

            <h2>Select Restaurant</h2>
            <select onChange={(e) => setSelected(e.target.value)}>
                <option value="">Choose</option>
                <option value="biryani">Biryani</option>
                <option value="pizza">Pizza</option>
                <option value="south">South Indian</option>
                <option value="chinese">Chinese</option>
                <option value="dessert">Dessert</option>
            </select>

            <h2>Menu</h2>
            {selected && restaurants[selected].map(item => (
                <div key={item.name}>
                    {item.name} ₹{item.price}
                    <button onClick={() => addToCart(item)}>Add</button>
                </div>
            ))}

            <h2>Cart</h2>
            {cart.map(i => (
                <div key={i.name}>
                    {i.name}
                    <button onClick={() => decreaseQty(i.name)}>−</button>
                    {i.qty}
                    <button onClick={() => increaseQty(i.name)}>+</button>
                </div>
            ))}

            <button onClick={checkout}>Checkout</button>
        </div>
    );
}

export default App;