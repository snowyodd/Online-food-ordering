const restaurants = {

    biryani: [

        { name: "Chicken Biryani", price: 180 },
        { name: "Mutton Biryani", price: 250 },
        { name: "Egg Biryani", price: 150 },
        { name: "Veg Biryani", price: 120 },
        { name: "Paneer Biryani", price: 160 },
        { name: "Double Chicken Biryani", price: 300 },
        { name: "Family Pack Biryani", price: 550 },
        { name: "Fish Biryani", price: 220 },
        { name: "Prawns Biryani", price: 280 },
        { name: "Special Dum Biryani", price: 260 },

        { name: "Butter Chicken", price: 200 },
        { name: "Chicken Curry", price: 180 },
        { name: "Mutton Curry", price: 260 },
        { name: "Dal Fry", price: 120 },
        { name: "Paneer Butter Masala", price: 170 },
        { name: "Chicken 65", price: 160 },
        { name: "Chilli Chicken", price: 170 },
        { name: "Tandoori Chicken", price: 240 },
        { name: "Chicken Lollipop", price: 190 },
        { name: "Egg Curry", price: 140 },

        { name: "Roti", price: 20 },
        { name: "Butter Naan", price: 40 },
        { name: "Garlic Naan", price: 50 },
        { name: "Jeera Rice", price: 90 },
        { name: "Curd Rice", price: 80 },
        { name: "Veg Fried Rice", price: 130 },
        { name: "Chicken Fried Rice", price: 150 },
        { name: "Egg Fried Rice", price: 140 },
        { name: "Veg Noodles", price: 120 },
        { name: "Chicken Noodles", price: 150 }

    ],

    pizza: [

        { name: "Margherita Pizza", price: 120 },
        { name: "Veg Loaded Pizza", price: 160 },
        { name: "Paneer Pizza", price: 180 },
        { name: "Cheese Burst Pizza", price: 200 },
        { name: "Farmhouse Pizza", price: 190 },
        { name: "Corn Pizza", price: 150 },
        { name: "Mushroom Pizza", price: 170 },
        { name: "Onion Pizza", price: 140 },
        { name: "Capsicum Pizza", price: 140 },
        { name: "Mexican Pizza", price: 210 },

        { name: "Chicken Pizza", price: 220 },
        { name: "Pepperoni Pizza", price: 260 },
        { name: "BBQ Chicken Pizza", price: 250 },
        { name: "Peri Peri Pizza", price: 240 },
        { name: "Chicken Tikka Pizza", price: 260 },
        { name: "Spicy Chicken Pizza", price: 230 },
        { name: "Italian Chicken Pizza", price: 270 },
        { name: "Double Cheese Pizza", price: 240 },
        { name: "Supreme Pizza", price: 300 },
        { name: "Deluxe Pizza", price: 320 },

        { name: "Garlic Bread", price: 90 },
        { name: "Cheese Garlic Bread", price: 120 },
        { name: "Veg Pasta", price: 160 },
        { name: "White Sauce Pasta", price: 170 },
        { name: "Red Sauce Pasta", price: 160 },
        { name: "Chicken Pasta", price: 190 },
        { name: "Cold Coffee", price: 90 },
        { name: "Pepsi", price: 40 },
        { name: "Coke", price: 40 },
        { name: "Chocolate Shake", price: 110 }

    ],

    south: [

        { name: "Idli", price: 40 },
        { name: "Vada", price: 50 },
        { name: "Plain Dosa", price: 60 },
        { name: "Masala Dosa", price: 80 },
        { name: "Onion Dosa", price: 90 },
        { name: "Ghee Dosa", price: 95 },
        { name: "Rava Dosa", price: 85 },
        { name: "Paper Dosa", price: 110 },
        { name: "Set Dosa", price: 70 },
        { name: "Mysore Dosa", price: 95 },

        { name: "Uttapam", price: 80 },
        { name: "Onion Uttapam", price: 90 },
        { name: "Tomato Uttapam", price: 90 },
        { name: "Veg Uttapam", price: 100 },
        { name: "Poori", price: 70 },
        { name: "Chapati", price: 40 },
        { name: "Pongal", price: 75 },
        { name: "Upma", price: 60 },
        { name: "Kesari Bath", price: 65 },
        { name: "Curd Rice", price: 80 },

        { name: "Sambar Rice", price: 90 },
        { name: "Lemon Rice", price: 85 },
        { name: "Coconut Rice", price: 95 },
        { name: "Bisibele Bath", price: 100 },
        { name: "Meals Mini", price: 120 },
        { name: "Meals Full", price: 180 },
        { name: "Filter Coffee", price: 25 },
        { name: "Tea", price: 15 },
        { name: "Badam Milk", price: 40 },
        { name: "Lassi", price: 50 }

    ],

    chinese: [

        { name: "Veg Fried Rice", price: 130 },
        { name: "Egg Fried Rice", price: 140 },
        { name: "Chicken Fried Rice", price: 160 },
        { name: "Veg Noodles", price: 120 },
        { name: "Egg Noodles", price: 140 },
        { name: "Chicken Noodles", price: 160 },
        { name: "Schezwan Rice", price: 150 },
        { name: "Schezwan Noodles", price: 150 },
        { name: "Triple Rice", price: 190 },
        { name: "Triple Noodles", price: 190 },

        { name: "Veg Manchurian", price: 140 },
        { name: "Gobi Manchurian", price: 150 },
        { name: "Chicken Manchurian", price: 170 },
        { name: "Paneer Manchurian", price: 160 },
        { name: "Chilli Chicken", price: 180 },
        { name: "Dragon Chicken", price: 200 },
        { name: "Hot Garlic Chicken", price: 190 },
        { name: "Sweet Corn Soup", price: 90 },
        { name: "Hot & Sour Soup", price: 95 },
        { name: "Chicken Soup", price: 110 },

        { name: "Spring Rolls", price: 120 },
        { name: "Chicken Spring Rolls", price: 150 },
        { name: "Paneer Chilli", price: 160 },
        { name: "Veg Chilli", price: 130 },
        { name: "Chicken Lollipop", price: 190 },
        { name: "Honey Chicken", price: 200 },
        { name: "American Chopsuey", price: 170 },
        { name: "Chinese Bhel", price: 120 },
        { name: "Fried Momos", price: 110 },
        { name: "Steamed Momos", price: 100 }

    ],

    dessert: [

        { name: "Chocolate Cake", price: 120 },
        { name: "Black Forest Cake", price: 130 },
        { name: "Vanilla Cake", price: 100 },
        { name: "Red Velvet Cake", price: 150 },
        { name: "Butterscotch Cake", price: 140 },
        { name: "Brownie", price: 80 },
        { name: "Ice Cream Vanilla", price: 60 },
        { name: "Ice Cream Chocolate", price: 70 },
        { name: "Ice Cream Strawberry", price: 70 },
        { name: "Ice Cream Butterscotch", price: 75 },

        { name: "Mango Juice", price: 60 },
        { name: "Orange Juice", price: 50 },
        { name: "Watermelon Juice", price: 40 },
        { name: "Apple Juice", price: 70 },
        { name: "Pineapple Juice", price: 60 },
        { name: "Banana Shake", price: 80 },
        { name: "Chocolate Shake", price: 90 },
        { name: "Strawberry Shake", price: 90 },
        { name: "Oreo Shake", price: 100 },
        { name: "Kitkat Shake", price: 110 },

        { name: "Falooda", price: 120 },
        { name: "Gulab Jamun", price: 50 },
        { name: "Rasgulla", price: 50 },
        { name: "Jalebi", price: 60 },
        { name: "Kaju Katli", price: 140 },
        { name: "Milk Sweet", price: 120 },
        { name: "Dry Fruit Laddu", price: 130 },
        { name: "Cup Cake", price: 60 },
        { name: "Donut", price: 70 },
        { name: "Pastry", price: 80 }

    ]

}
export default restaurants;