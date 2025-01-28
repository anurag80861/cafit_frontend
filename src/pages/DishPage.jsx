import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setDish } from '../slices/dishSlice';

function DishPage() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.dish.products);

    useEffect(() => {
        axios.get("http://localhost:5500/dishes")
            .then(res => {
                const dish = res.data;
                dispatch(setDish(dish));
            })
            .catch(err => console.log(err));
    }, [dispatch]);

    const handleAddToCart = (dish) => {
        // Add your cart logic here
        alert(`Added ${dish.name} to cart!`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Dish Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(dish => (
                    <div
                        key={dish.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>

                        <div className="flex  items-center mb-3">
                            <span className="text-gray-600">Price:</span>
                            <span className="font-medium">Rs.{dish.price}</span>
                        </div>

                        <div className="flex items-center mb-4">
                            <span className="text-gray-600">Status:</span>
                            <span className={`px-2 py-1 rounded-full text-sm ${dish.inStock
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                                }`}>
                                {dish.inStock ? 'Available' : 'Out of Stock'}
                            </span>
                        </div>
                        <button
                            onClick={() => handleAddToCart(dish)}
                            className="mt-4 px-2 py-1 w-32 bg-red-600 text-white text-sm rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Add to Cart
                        </button>


                    </div>
                ))}
            </div>
        </div>
    );
}

export default DishPage;