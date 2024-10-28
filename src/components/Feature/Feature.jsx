import React from 'react';
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Feature = ({feature}) => {
    return (
        <div>
            <div className="flex space-x-2  items-center">
            <IoCheckmarkCircleSharp className="text-3xl" />
                <p>{feature}</p>
            </div>
        </div>
    );
};

export default Feature;