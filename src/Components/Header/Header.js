// import logo from '../../sports-db/public/biryani.png';
// import React, { useState } from 'react';

import('./Header.css')

const Header = () => {
    const logo = ['biyrani Khabo']

    // const [search, setSearch] = useState("");

    // useEffect(() => {
    //     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    //         .then(res => res.json())
    //         .then(data => setSearch(data.meals));
    //     // .then(data => console.log(data.meals));
    // }, [search]);

    return (
        <div className='px-20'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a href='./' className="btn btn-ghost normal-case text-2xl">{logo}</a>
                </div>
                <div className="flex-none gap-2">
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;