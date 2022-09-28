import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import('./Cart.css')

const Cart = (props) => {
    const { handleDelete } = props;
    const { cart } = props;
    console.log(props);

    // console.log(strMeal)
    return (
        <div className='sticky' >
            <h1 className='text-center text-2xl font-bold mb-5'>Add Your Meal <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></h1>
            <div className='bg-slate-800 text-white h-60 p-1 '>
                <p className='text-center mb-3' >Total Item : {cart.length} </p>
                <div >

                    <div className="overflow-x-auto">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(mealName => <tr>
                                        <td>{mealName.idMeal}</td>
                                        <td>{mealName.strMeal}</td>
                                        <td><FontAwesomeIcon onClick={() => handleDelete(mealName.strMeal)} icon={faDeleteLeft} ></FontAwesomeIcon></td>
                                    </tr>)

                                }

                            </tbody>
                        </table>
                    </div>


                    {/* {
                        cart.map(mealName => <li> {mealName.strMeal} <FontAwesomeIcon onClick={() => handleDelete(mealName.strMeal)} icon={faDeleteLeft} ></FontAwesomeIcon>  </li>)
                    } */}
                </div>



            </div>
        </div>
    );
};

export default Cart;