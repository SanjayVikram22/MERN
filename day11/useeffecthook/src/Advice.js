import React, { useEffect, useState } from 'react'

export default function Advice() {
    const[adviceValue , setadvicevalue] = useState("");
    useEffect(()=>{
        const adviceurl = "https://api.adviceslip.com/advice";
        
        const fetchadvice =async () =>{
            const response =await fetch(adviceurl);
            const json = await response.json();
            console.log(json);

            setadvicevalue(json.slip.advice);

        }
        fetchadvice();
    });


  return (
    <>
        <h1>{adviceValue}</h1>
    </>
  )
}
