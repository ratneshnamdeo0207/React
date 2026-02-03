import { useState } from "react"
import "./Lottery.css"
import { genTicket, sum } from "./helper"
export default function Lottery()
{
    let [Ticket, setTicket] = useState(genTicket(3))
    let isWinning = sum(Ticket) === 15
    function buyTicket()
    {
        setTicket(()=>genTicket(3))
    }
    return (
        <div>
            <h2>Lottery Game</h2>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
            </div>
            <h2>{isWinning && "U Win"}</h2>
            <button onClick={()=>buyTicket()}>Create Ticket</button>

        </div>
    )
}