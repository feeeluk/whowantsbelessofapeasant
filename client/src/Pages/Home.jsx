import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Home() {

    let [quiz, setQuiz] = useState([])
    useEffect( () => {
  
      fetchQuizzes()
  
      async function fetchQuizzes(){
        const response = await fetch("http://localhost:7070/quizzes")
        const quizData = await response.json(response.rows)
        setQuiz(quizData)
      }
    },[])

    return (
        <div className="px-7">
            <section className="text-5xl flex flex-row items-center  text-slate-200">
                <h1>Home</h1>
            </section>
            <div className="grid grid-cols-4  text-slate-200">
                {quiz.map( (item) => {
                return(
                    <Link to={`/quiz/${item.quiz_id}`}><h1>{item.quiz_name} - {item.category_name}</h1></Link>
                )
                })}
            </div>
        </div>
    )
}