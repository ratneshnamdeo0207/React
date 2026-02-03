import { useState } from 'react'
import { genTicket, sum } from './helper'
import './App.css'
import Lottery from './Lottery'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
function App() {
   
  
  return (
   
    <>
         <Lottery n = {3} win={15}/>
    </>
     
    
    

  )
}

export default App
