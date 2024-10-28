// import React from 'react';
// import PropTypes from 'prop-types';
// {
//     "id": 3,
//     "name": "Premium Plan",
//     "price": 60,
//     "features": [
//         "Unlimited access to gym equipment",
//         "Locker room, shower, and sauna access",
//         "Unlimited group classes",
//         "3 personal training sessions per month",
//         "Access to pool and spa facilities"
//     ]
// }
import Feature from "../Feature/Feature";

const PriceOption = ({ price }) => {
    // console.log(price);
    const {name,price:prices, features} = price;
    return (
        <div className="bg-blue-400 text-white my-5 p-6 flex flex-col">
            <span className="text-7xl">{ prices}</span>
            <span className="text-xl">{name}</span>
            <div className="mt-9 flex-grow">
                {
                    features.map(feature=><Feature feature={feature}></Feature>)
                }
            </div>
            <button className='w-full py-2 mt-4 bg-white text-blue-500'>Buy Now</button>
        </div>
    );
};

// PriceOption.propTypes = {
    
// };

export default PriceOption;