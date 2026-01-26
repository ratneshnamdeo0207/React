import "./Price.css"
export default function Price({prices})
{
    let styles = {
         textDecoration: "line-through"
    }
    
    return(
        <div className="Price">
            <p ><span style={styles}>{prices[0]}</span> {prices[1]}</p>
            
        </div>
    )
}