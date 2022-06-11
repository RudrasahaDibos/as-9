import React from 'react';
import { Area, AreaChart,CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis} from 'recharts';
import UseCharts from '../../Hooks/UseChart';

const Dashborad = () => {
    const [charts] = UseCharts();
    return (
        <div className='grid mt-20 grid-cols-2 gap-6  mx-auto '>
            {/* chart 1 */}
            <AreaChart
                width={700}
                height={400}
                data={charts}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>


            {/* chart 2 */}

            <LineChart
                width={700}
                height={400}
                data={charts}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Line type="monotoneX" dataKey="investment" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Dashborad;