import { useState } from 'react';
import Cart from '../Cart/Cart';
import Meals from '../Meals/Meals';
import('./Mealsection.css')
const Mealsection = () => {
    const [carts, setCarts] = useState([])


    const handleAddtoCart = (meals) => {
        const newCart = [...carts, meals]
        setCarts(newCart);
    }

    const handleDelete = (mealName) => {
        const leftPlayer = carts.filter(cart => cart.strMeal !== mealName);
        setCarts(leftPlayer);
    }

    return (
        <div>
            <h1 className='text-4xl text-center mb-20 mt-20 font-extrabold' >Choose Your Best Meal</h1>
            <div className='flex flex-col-reverse lg:flex-row px-10' >
                <div className='grow w-10/12 flex justify-center items-center' >
                    <Meals handleAddtoCart={handleAddtoCart}></Meals>
                </div>
                <div className='grow w-2/12 ml-15'>
                    <Cart cart={carts} handleDelete={handleDelete} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Mealsection;