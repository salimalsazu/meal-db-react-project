import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import('./Meal.css')

const Meal = (props) => {
    // console.log(props.meal);
    const { meal } = props;
    const { handleAddtoCart } = props;
    const { idMeal, strArea, strMeal, strMealThumb, strTags, strInstructions } = meal;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}
                        <div className="badge badge-secondary">{strArea}</div>
                    </h2>
                    <p>{strInstructions.slice(0, 99)} {'...'}</p>
                    <div>
                        <p>Meal id: {idMeal}</p>
                        <p>Meal Tag: {strTags}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleAddtoCart(meal)} className="badge badge-outline">Add to Cart <FontAwesomeIcon className='ml-2' icon={faCartPlus} ></FontAwesomeIcon> </button>
                        <div className="badge badge-outline">Details</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Meal;