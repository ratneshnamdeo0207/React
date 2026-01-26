import { useState } from "react"
export default function LikeButton()
{
    let [isLiked, setisLiked] = useState(false);
   
    function Liked()
    {
        isLiked ? setisLiked(false) : setisLiked(true)
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