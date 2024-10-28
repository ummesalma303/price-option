import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { id: 1, name: "Alice", mathMarks: 85 },
        { id: 2, name: "Bob", mathMarks: 78 },
        { id: 3, name: "Charlie", mathMarks: 92 },
        { id: 4, name: "David", mathMarks: 88 },
        { id: 5, name: "Eve", mathMarks: 76 },
        { id: 6, name: "Frank", mathMarks: 90 },
        { id: 7, name: "Grace", mathMarks: 82 },
        { id: 8, name: "Heidi", mathMarks: 95 },
        { id: 9, name: "Ivan", mathMarks: 79 },
        { id: 10, name: "Judy", mathMarks: 87 }
      ];
      
      
    return (
        <div>
            <LChart width={500} height={300} data={studentMarks}>
            <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" />
                {/* <Line type="" dataKey="pv" stroke="#82ca9d" /> */}
                <XAxis dataKey="name" />
                <YAxis />
           </LChart>
        </div>
    );
};

export default LineChart;