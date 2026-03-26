const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/foodflow")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Schema
const OrderSchema = new mongoose.Schema({
    items: Array,
    total: Number
});

const Order = mongoose.model("Order", OrderSchema);

// Routes
app.post("/order", async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.send("Order saved");
});

app.get("/orders", async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.listen(5000, () => console.log("Server running on port 5000"));