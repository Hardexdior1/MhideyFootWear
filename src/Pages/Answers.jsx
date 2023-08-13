import React from 'react'
import "../Styles/Question.css"
import { useState } from 'react'
const Answers = ({question,answer}) => {
  const[showAnswer,setShowAnswer]=useState(false)
  
  return (
    <div className='questionCarrier'>
     
        <div className='carrier'> 

          <div className="question">
          <h4>{question}</h4>

          <button onClick={()=>{
        setShowAnswer(!showAnswer)
       }}>{showAnswer? '-':'+'}</button>
       
      
          </div>

          {showAnswer &&<p>{answer}</p>}

        </div>
    </div>
  )
}

export default Answers