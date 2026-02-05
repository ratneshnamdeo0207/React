import { useEffect, useState } from "react"

export default function Joker()
{
    const URL = "https://official-joke-api.appspot.com/random_joke"
    let [Joke, setJoke]= useState({
        setup: "",
        punchline: ""
    })
    let newJoke = async ()=>{
       
        let res = await fetch(URL)
        let jsonRes = await res.json()
        console.log(jsonRes)
        setJoke(jsonRes)
    }
    useEffect(()=>{    // it is important use a call back func otherwise warning will appear
        async function getFirstJoke()
        {
            let res = await fetch(URL)
            let jsonRes = await res.json()
            console.log(jsonRes)
            setJoke(jsonRes)
        }

        getFirstJoke()
        
    }, [])   //An empty array is used to send that signify that we just want to make this work done only one time
    return (
       <div>
        <h2>Random Joke</h2>
        <p>{Joke.setup}</p>
        <p>{Joke.punchline}</p>
        <button onClick={newJoke}>Get Joke</button>
      </div>
    )
}