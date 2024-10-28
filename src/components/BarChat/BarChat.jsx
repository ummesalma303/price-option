import React from 'react';
import { Bar, BarChart as BChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;
  
    return (
      <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#82ca9d" />
        {/* <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" /> */}
            
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value[0]}
        </text>
      </g>
    );
};
  


const BarChat = () => {
    const studentMarks = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 78, chemistryMarks: 82 },
        { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 44, chemistryMarks: 80 },
        { id: 3, name: "Charlie", mathMarks: 92, physicsMarks: 89, chemistryMarks: 94 },
        { id: 4, name: "David", mathMarks: 88, physicsMarks: 85, chemistryMarks: 86 },
        { id: 5, name: "Eve", mathMarks: 76, physicsMarks: 72, chemistryMarks: 78 },
        { id: 6, name: "Frank", mathMarks: 90, physicsMarks: 87, chemistryMarks: 91 },
        { id: 7, name: "Grace", mathMarks: 82, physicsMarks: 79, chemistryMarks: 54 },
        { id: 8, name: "Heidi", mathMarks: 95, physicsMarks: 93, chemistryMarks: 96 },
        { id: 9, name: "Ivan", mathMarks: 79, physicsMarks: 77, chemistryMarks: 81 },
        { id: 10, name: "Judy", mathMarks: 87, physicsMarks: 82, chemistryMarks: 85 }
      ];
    return (
        <div className='my-12'>
            {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BChart  width={500} height={300} data={studentMarks}>
            <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
          <Legend />
                <Bar dataKey="mathMarks" fill="#8884d8" minPointSize={5}>
            {/* <LabelList dataKey="name" content={renderCustomizedLabel} /> */}
                    
          </Bar>
                <Bar dataKey="physicsMarks" fill="#82ca9d" minPointSize={10}>
            <LabelList dataKey="name" content={renderCustomizedLabel} />

                </Bar>
             </BChart>
            {/* </ResponsiveContainer> */}
           
        </div>
    );
};

export default BarChat;