import React, { useEffect, useState } from 'react'
import BarChart from './BarChart';
import axios from 'axios';

const Practice = ({imageurl}) => {
    console.log(imageurl);
    
    const [backendData,setbackendData]=useState([
    // { label: "Real", score: 0.905386209487915 },
    // { label: "Fake", score: 0.10408424586057663 }
  ]);
    const func=async ()=>{
     const res=await axios.post('https://image-detection-dv2h.onrender.com/detect',{
  image_url:imageurl
});
     return res.data;
    }
    useEffect(()=>{
        func().then((res)=>{
            console.log(res);
            
         setbackendData(res.result);
        })
    },[])
    if(backendData.length==0){
        return <div>
            loding...
        </div>
    }
//   const backendData = [
//     { label: "Real", score: 0.905386209487915 },
//     { label: "Fake", score: 0.10408424586057663 }
//   ];

  return (
    <div style={{ width: "500px", margin: "" }}>
      <h2>Fake vs Real Score</h2>
      <BarChart data={backendData} />
    </div>
  );
};


export default Practice