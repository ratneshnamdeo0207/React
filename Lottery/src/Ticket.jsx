import TicketNum from "./TicketNum";

export default function Ticket({arr})
{
    return (
        <div>
            {arr.map((a, i) =>
                <TicketNum key={i} num={a}/>
            )}
        </div>
    )
}