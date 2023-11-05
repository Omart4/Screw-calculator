import React, { useEffect, useState } from "react"
import '../styles/PlayerColumn.css'

const PlayerColumn = ({player ,players,setPlayers}) => {
  const [total,setTotal] = useState(0)
  const updateScore = () =>{
    const tempArr = [...players]
    let index = tempArr.findIndex(p => p.name === player.name)
    tempArr[index].score = total
    setPlayers(tempArr)
  }
    const [r1,setR1] = useState(0)
    const [r2,setR2] = useState(0)
    const [r3,setR3] = useState(0)
    const [r4,setR4] = useState(0)
    const [r5,setR5] = useState(0)
    useEffect(()=>{
        setTotal(r1+r2+r3+r4+r5)
        updateScore()
    },[r1,r2,r3,r4,r5,total])
  return (
    <div className="player">
      <h4>{player.name}</h4>
      <div className="inputs">
        <input type="number" onChange={(e)=>{setR1(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR2(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR3(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR4(Number(e.target.value))}} />
        <input type="number" onChange={(e)=>{setR5(Number(e.target.value*2))}} />
        <input type="number" value={r5}/>
      </div>
      <p>{total}</p>
    </div>
  )
};

export default PlayerColumn;
