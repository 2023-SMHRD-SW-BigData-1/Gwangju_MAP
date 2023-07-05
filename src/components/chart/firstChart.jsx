import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "",
        안전율: 100,
        범죄율: 100,
        amt: 0,
    },
    {
        name: "광산구",
        안전율: 3000,
        범죄율: 1398,
        amt: 2210,
    },
    {
        name: "남구",
        안전율: 2000,
        범죄율: 9800,
        amt: 2290,
    },
    {
        name: "서구",
        안전율: 2780,
        범죄율: 3908,
        amt: 2000,
    },
    {
        name: "북구",
        안전율: 1890,
        범죄율: 4800,
        amt: 2181,
    },
    {
        name: "동구",
        안전율: 2390,
        범죄율: 3800,
        amt: 2500,
    }
    
       
    
];

export default class firstChart extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="안전율"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="범죄율" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
