import { useState } from "react"
import CommentsForm from "./CommentsForm"
import "./Comment.css"
export default function Comments()
{
    let [Comments, setComments] = useState([
        {
            username: "tony",
            remark: "Great Place",
            rating: 3

        }])
    let handleNewComment=(newComment)=>{
        console.log(newComment)
        setComments([...Comments, newComment])
        
    }

    return (
       <>
            <h2>All Comments</h2>
            <div >
               {
                    Comments.map((comment, i)=>(
                        <div className="Comment" key={i}>
                            <p>{comment.remark}&nbsp; &nbsp; <span>rating: {comment.rating}</span></p>
                            <h3>@{comment.username}</h3>
                            
                        </div>
                    ))
               }
               <hr />

            </div>
            <CommentsForm handleNewComment={handleNewComment}/>
       </>
    )
}