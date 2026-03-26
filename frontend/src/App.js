import { useState, useEffect } from "react";
import axios from "axios";
import restaurants from "./menu";
import "./App.css";

function App() {
    const [user, setUser] = useState(localStorage.getItem("user"));
    const [username, setUsername] = useState("");
    const [selected, setSelected] = useState("");
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [message, setMessage] = useState("");
    const [orderSuccess, setOrderSuccess] = useState(false);
    const images = {
        biryani: "https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?_gl=1*6zhcvk*_ga*MTcwMTM5NjAxMS4xNzc0NTQ1Mjc1*_ga_8JE65Q40S6*czE3NzQ1NDUyNzQkbzEkZzEkdDE3NzQ1NDUzMzIkajIkbDAkaDA.",
        pizza: "https://images.pexels.com/photos/36741918/pexels-photo-36741918.jpeg",
        south: "https://images.pexels.com/photos/4331488/pexels-photo-4331488.jpeg",
        chinese: "https://images.pexels.com/photos/5848469/pexels-photo-5848469.jpeg",
        dessert: "https://images.pexels.com/photos/36183206/pexels-photo-36183206.jpeg"
    };


    useEffect(() => {
        if (user) {
            const savedCart = localStorage.getItem(`cart_${user}`);
            if (savedCart) {
                setCart(JSON.parse(savedCart));
            } else {
                setCart([]);
            }
        }
    }, [user]);
    useEffect(() => {
        if (user) {
            localStorage.setItem(`cart_${user}`, JSON.stringify(cart));
        }
    }, [cart, user]);
    // LOGIN
    const login = () => {
        if (!username) return;
        localStorage.setItem("user", username);
        setUser(username);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    // ADD TO CART + MESSAGE
    const addToCart = (item) => {
        const exists = cart.find(i => i.name === item.name);

        if (exists) {
            setCart(cart.map(i =>
                i.name === item.name ? { ...i, qty: i.qty + 1 } : i
            ));
        } else {
            setCart([...cart, { ...item, qty: 1 }]);
        }

        setMessage(`${item.name} added to cart ✅`);
        setTimeout(() => setMessage(""), 1500);
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
            setMessage("Cart is empty ⚠️");
            return;
        }

        let total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

        try {
            await axios.post("http://localhost:5000/order", {
                items: cart,
                total
            });

            setOrderSuccess(true);
            setCart([]);

            setTimeout(() => {
                setOrderSuccess(false);
            }, 2500);

        } catch (err) {
            setMessage("Server error ⚠️");
        }
    };

    // LOGIN PAGE
    if (!user) {
        return (
            <div className="login">
                <div className="login-box">
                    <h1 className="brand">NeonBites</h1>
                    <p>Order your favorite food in seconds</p>

                    <input
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <button onClick={login}>Login</button>
                </div>
            </div>
        );
    }

    const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

    return (
        <div>
            {/* NAVBAR */}
            <nav>
                <h2 className="brand">NeonBites</h2>
                <div>
                    <button onClick={() => setSelected("")}>Home</button>
                    <button onClick={() => setShowCart(!showCart)}>Cart 🛒</button>
                    <button onClick={logout}>Logout</button>
                </div>
            </nav>

            {/* MESSAGE */}
            {message && <div className="toast">{message}</div>}

            {/* HOME PAGE */}
            {!selected && (
                <div className="home">
                    <h1>Welcome, {user} !</h1>
                    <p className="tagline">
                        Choose from <span>Top Cuisines</span>
                    </p>

                    <div className="cards">
                        {Object.keys(restaurants).map(r => (
                            <div key={r} className="card" onClick={() => setSelected(r)}>

                                <img src={images[r]} alt={r} />
                                <h3>{r.toUpperCase()}</h3>
                                <p>Explore delicious {r} dishes</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {/* MENU */}
            {selected && (
                <div className="menu">
                    <h2>{selected.toUpperCase()} Menu</h2>
                    <p className="subtitle">Pick your favorite items</p>

                    {/* CATEGORY 1 */}
                    <h3>Main Dishes</h3>
                    <div className="menu-grid">
                        {restaurants[selected].slice(0, 10).map(item => (
                            <div className="menu-card" key={item.name}>
                                <h4>{item.name}</h4>
                                <p>₹{item.price}</p>
                                <button onClick={() => addToCart(item)}>Add</button>
                            </div>
                        ))}
                    </div>

                    {/* CATEGORY 2 */}
                    <h3>Other Items</h3>
                    <div className="menu-grid">
                        {restaurants[selected].slice(10).map(item => (
                            <div className="menu-card" key={item.name}>
                                <h4>{item.name}</h4>
                                <p>₹{item.price}</p>
                                <button onClick={() => addToCart(item)}>Add</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* CART PANEL */}
            {showCart && (
                <div className="cart-overlay">
                    <div className="cart-box">
                        <h2>Your Cart 🛒</h2>
                        <p className="subtitle">Review your items before checkout</p>

                        {cart.length === 0 && <p>Cart is empty</p>}
                        <h4>{cart.length} items</h4>
                        {cart.map(i => (
                            <div key={i.name} className="cart-item">
                                <div>
                                    <strong>{i.name}</strong>
                                    <p>₹{i.price}</p>
                                </div>

                                <div className="qty">
                                    <button onClick={() => decreaseQty(i.name)}>−</button>
                                    {i.qty}
                                    <button onClick={() => increaseQty(i.name)}>+</button>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            <h3>Total: ₹{total}</h3>
                        </div>
                        <div className="cart-footer">

                            <button onClick={checkout}>Checkout</button>
                            <button onClick={() => setShowCart(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
            {orderSuccess && (
                <div className="success-popup">
                    <div className="success-box">
                        <h2>🎉 Order Placed!</h2>
                        <p>Your food is on the way!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;