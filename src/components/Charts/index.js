import './index.css';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer, Legend } from 'recharts';





function Charts(props){
    
    return (
        <div className="chart">
           <h3 className="chart-title">
               {props.title}
           </h3>
           <ResponsiveContainer width='100%' aspect={4 / 1}>
               <LineChart data={props.data}>
                   <XAxis dataKey='name' stroke='#5550bd'/>
                   <Line type='monotone' dataKey={props.dataKey} stroke='#5550bd'/>
                   <Tooltip/>
                   {props.grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>}
                   
                <Legend/>

                   </LineChart>
               </ResponsiveContainer>


           
        </div>
    )
}

export default Charts