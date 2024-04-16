import React,{useState,useEffect} from 'react'

export default function Render() {
    const [count, setcount] = useState(0)
    useEffect(() => {
      setTimeout(()=>{
        setcount((count)=>count+1);
      },1000);
    });
    
  return (
    <>
        <h1>This function has rendered{count} times!</h1>

        <button onClick={()=>setcount((dValue)=>dValue+1)}>ADD</button>
    </>
  );
}
