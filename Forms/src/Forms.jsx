import { useState } from "react"

export default function Forms()
{  
  // let [userName, setUserName]= useState("")
  // let handleNameChange= (event)=>
  // {
  //   setUserName(event.target.value)
  // }

  let [FormData, setFormData] = useState(
    { username: "", 
      fullname: "",
      password: ""
    }
  )

  let handleInputChange = (e)=>
  {
    setFormData((prev)=>{
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  let handleSubmit = (event)=>{
    event.preventDefault()
    console.log(FormData)
    setFormData({
      username: "", 
      fullname: "",
      password: ""
    })
  }
  return (
    <>
      <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label> <br />
        <input type="text" placeholder='Enter Username' value={FormData.username} onChange={handleInputChange} id='username' name='username' />

        <br /><br />

        <label htmlFor="fullname">Full Name:</label><br />
        <input type="text" placeholder='Enter Username' value={FormData.fullname} onChange={handleInputChange} id='fullname' name='fullname' />

        <br /><br />

        <label htmlFor="password">Password:</label><br />
        <input type="password" placeholder='Enter Password' value={FormData.password} onChange={handleInputChange} id='password' name='password' />

        <br /><br />

        <button>submit</button>
      </form>
    </>
  )
}