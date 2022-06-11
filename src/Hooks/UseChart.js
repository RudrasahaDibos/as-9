import { useEffect, useState } from "react";


const UseCharts = () => {
   
        const  [charts,setCharts]=useState([]);
        useEffect(()=>{
            fetch('chart.json')
            .then(res => res.json())
            .then(data => setCharts(data))
        },[]);
        return [charts,setCharts];
   
};

export default UseCharts;