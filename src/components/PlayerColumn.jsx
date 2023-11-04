import React, { useEffect, useState } from "react"
import '../styles/PlayerColumn.css'

const PlayerColumn = ({player}) => {
    const [total,setTotal] = useState(0)
    const [r1,setR1] = useState(0)
    const [r2,setR2] = useState(0)
    const [r3,setR3] = useState(0)
    const [r4,setR4] = useState(0)
    const [r5,setR5] = useState(0)
    useEffect(()=>{
        setTotal(r1+r2+r3+r4+r5)
    },[r1,r2,r3,r4,r5])
  return (
    <div className="player">
      <h4>{player.name}</h4>
      <div className="inputs">
        <input type="number" onChange={(e)=>{setR1(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR2(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR3(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR4(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR5(Number(e.target.value*2))}} />
        
      </div>
      <p>{total}</p>
    </div>
  )
};

export default PlayerColumn;
