import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css"

export function Home() {
  let [quiz, setQuiz] = useState([]);
  useEffect(() => {
    fetchQuizzes();

    async function fetchQuizzes() {
      const response = await fetch("https://whowantsbelessofapeasant.onrender.com/quizzes");
      const quizData = await response.json(response.rows);
      setQuiz(quizData);
    }
  }, []);

  return (
    <div className="grid px-7 grid-rows-subgrid grid-cols-subgrid col-span-3">
      <section className="md:text-5xl flex flex-col items-center  text-slate-200 sm:text-xs">
        <h1 className="text-md">Home</h1>
        <p className="text-lg">To play a quiz you must first be signed in.</p>
      </section>
      <div className="flex flex-col font-bold py-2 px-4 rounded-full text-slate-200">
        {quiz.map((item) => {
          return (
            <div className="flex flex-col">
            <Link to={`/quiz/${item.quiz_id}`} key={item.quiz_id}>
              <div className="flex flex-col border-2 m-1 p-1">
                <button>{item.quiz_name} - {item.category_name}</button>
              </div>
            </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
