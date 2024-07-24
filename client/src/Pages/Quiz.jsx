import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function Quiz(){

    let [quiz, setQuiz] = useState([])

    const {id} = useParams()

    useEffect( () => {
  
        fetchQuiz()
    
        async function fetchQuiz(){
          const response = await fetch(`http://localhost:7070/quiz/${id}`)
          const quizData = await response.json(response.rows)
          setQuiz(quizData)
        }
      },[])

    return(
        <>
            <h1>Quiz {id}</h1>
            {quiz.map( (item) => {
                return(
                    <h1>Q:{item.questions_number}/15 Q:{item.questions_question}</h1>
                )
            })}
        </>
    )
}