import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  let [quiz, setQuiz] = useState([]);
  useEffect(() => {
    fetchQuizzes();

    async function fetchQuizzes() {
      const response = await fetch("http://localhost:7070/quizzes");
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
      <div className="grid grid-cols-4  text-slate-200">
        {quiz.map((item) => {
          return (
            <Link to={`/quiz/${item.quiz_id}`} key={item.quiz_id}>
              <h1>
                {item.quiz_name} - {item.category_name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
