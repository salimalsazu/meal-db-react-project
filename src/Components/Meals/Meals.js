import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import('./Meals.css')

const Meals = (props) => {
    const { handleAddtoCart } = props;
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
        // .then(data => console.log(data.meals));
    }, [search])

    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Your favorite Meal" className="input input-bordered input-primary w-full  mb-10 text-center" />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5' >
                {
                    meals.map(meal => <Meal meal={meal} handleAddtoCart={handleAddtoCart} ></Meal>)

                }

            </div>
        </div>

    );
};

export default Meals;