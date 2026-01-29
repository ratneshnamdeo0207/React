import { useState } from "react";

export default function LudoBoard()
{
    let [moves, setMoves] = useState({blue : 0, red: 1, yellow: 0, green: 1});
    let [arr, setArr] = useState(["no moves"]);

    function updateBlue()
    {
        // setMoves({...moves, blue: moves.blue + 1})
        setMoves(()=>{
           return {...moves, blue: moves.blue + 1};
        })
        setArr(()=>{
            return ([...arr, "blue move"])
        })
    }
    function updateRed()
    {
        // setMoves({...moves, red: moves.red +1})
        setMoves(()=>{
           return {...moves, blue: moves.blue + 1};
        })
    }
    function updateYellow()
    {
        // setMoves({...moves, yellow: moves.yellow + 1})
        setMoves(()=>{
           return {...moves, yellow: moves.yellow + 1};
        })
    }
    function updateGreen()
    {
        // setMoves({...moves, green: moves.green + 1})
        setMoves(()=>{
           return {...moves, green: moves.green + 1};
        })
    }

    return (
        <div>
            <h1>Game Begin</h1>
            <p>{arr}</p>
            <p>Blue: {moves.blue} </p>
            <button style={{backgroundColor: "blue"}} onClick={updateBlue} >+1</button>
            <p>Red: {moves.red} </p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            <p>Yellow: {moves.yellow}</p>
            <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
            <p>Green: {moves.green} </p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
 
        </div>
        
    );
}