import { useState } from "react"
export default function LikeButton()
{
    let [isLiked, setisLiked] = useState(false);
   
    function Liked()
    {
        setisLiked(!isLiked) 
        console.log(isLiked)
        console.log("Liked")
    }
    let styles = {
        color: "red"
    }
    return (
        <div>

        <p onClick={Liked}> {isLiked ? <i className="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart" style={styles}></i> } </p>
    
        </div>
    )
}
