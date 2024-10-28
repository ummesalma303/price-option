import React from 'react';
import { CartesianGrid, LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
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
        <div>
            <LChart width={500} height={300} data={studentMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#a5b1c2" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="chemistryMarks" stroke="#8884d8" />
            <Line type="monotone" dataKey="physicsMarks" stroke="#82ca9d" />
           </LChart>
        </div>
    );
};

export default LineChart;