import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    // const [price,setPrice]=useState([])
    const priceOptions=[
        {"id": 1,"name": "Basic Plan","price": 20,
          "features": [ "Access to gym equipment", "Locker room access","1 free fitness assessment" ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "Locker room and shower access",
            "5 group classes per month",
            "1 personal training session per month"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 60,
          "features": [
            "Unlimited access to gym equipment",
            "Locker room, shower, and sauna access",
            "Unlimited group classes",
            "3 personal training sessions per month",
            "Access to pool and spa facilities"
          ]
        },
        {
          "id": 4,
          "name": "VIP Plan",
          "price": 90,
          "features": [
            "All Premium Plan features",
            "Dedicated locker",
            "5 personal training sessions per month",
            "Nutritional guidance and meal planning",
            "Monthly massage therapy session"
          ]
        }
      ]
      
    // useEffect(() => {
    //     fetch(priceOptions)
    //         .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[])

    return (
        <div className='m-8'>
             <h2 className="text-5xl">Best Prices in the town</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {
                priceOptions.map(price=><PriceOption price={price}></PriceOption>)
            }
        </div>
        </div>
    );
};

export default PriceOptions;