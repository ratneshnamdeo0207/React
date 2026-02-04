import { useState } from "react"

export default function CommentsForm()
{
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: 1
    })
    let handleInputChange = (e)=>{
        setFormData((curr)=>{
            return {...curr, [e.target.name]: e.target.value}
        })
    }
    let handleSubmit = (e)=>{
        console.log(formData)
        e.preventDefault();
    }
    return (
        <div>
            <h2>This is Comments Form</h2>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="username">Username:</label> <br />
                <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={(handleInputChange)}/>

                <br /><br />

                <label htmlFor="remark">Enter ur remark:</label><br />
                <textarea placeholder="Add a remark" id="remark" name="remark" value={formData.remark} onChange={(handleInputChange)}></textarea>

                <br /><br />

                <label htmlFor="rating">Rating:</label><br />
                <input type="range" min={1} max={5} name="rating" value={formData.rating} onChange={(handleInputChange)}/>

                <br /><br />
                
                <button>Submit</button>
            </form>
        </div>
    )
}