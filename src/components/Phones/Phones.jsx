import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import { Hourglass, ProgressBar } from 'react-loader-spinner'
// {
//     "brand": "Apple ",
//     "phone_name": "iPhone XS",
//     "slug": "apple_iphone_xs-9318",
//     "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg"
// }


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};




const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        // .then(data=>setPhones(data.data))
        axios('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const newPhone = data.data.data;
                const phonesWithFakeData = newPhone.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                setPhones(phonesWithFakeData)
                setSpinner(false);
            })
    },[])
    return (
        <div>
            {
                spinner&&<div><Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    colors={['#306cce', '#72a1ed']}
                />
                <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
                
                </div>
                  
            }



            <h1> total{phones.length}</h1>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <PieChart width={400} height={400}>
            <Pie data={phones} cx="50%"
            cy="50%" labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
                    dataKey="price">
                    {phones.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            </Pie>
            </PieChart>
            {/* </ResponsiveContainer> */}
           
        </div>
    );
};

export default Phones;