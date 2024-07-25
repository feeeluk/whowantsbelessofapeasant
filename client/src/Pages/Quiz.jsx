import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Quiz() {
  let [quiz, setQuiz] = useState(null);
  let [question, setQuestion] = useState(0);
  let [score, setScore] = useState(0);

  const { id } = useParams();

  function handleAnswerQuestion(answer) {
    if (
      answer === `${quiz[question].questions_final_answer}` &&
      question === 14
    ) {
      window.location.href = "http://localhost:5173/completed";
    } else if (answer === `${quiz[question].questions_final_answer}`) {
      setScore(score + quiz[question].questions_value);
      setQuestion(question + 1);
    } else {
      window.location.href = "http://localhost:5173/gameover";
    }
  }

  function exitQuiz() {
    window.location.href = "http://localhost:5173/exit";
  }

  useEffect(() => {
    fetchQuiz();

    async function fetchQuiz() {
      const response = await fetch(`http://localhost:7070/quiz/${id}`);
      const quizData = await response.json(response.rows);
      setQuiz(quizData.reverse());
    }
  }, [question]);

  return (
    <div className="text-lg text-slate-300">
      <h1>
        Quiz {id} - {quiz ? <>{quiz[question].category_name}</> : ""}
      </h1>

      {quiz ? (
        <div className="">
          <h2>Question number: {question + 1} / 15</h2>
          <h2>Question score: {quiz[question].questions_value}pts</h2>
          <h2>Question: {quiz[question].questions_question}</h2>
          <div className="grid grid-cols-2 grid-rows-2 place-items-center max-w-96 place-content-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-48"
              onClick={() => {
                handleAnswerQuestion(quiz[question].questions_answer_1);
              }}
            >
              A: {quiz[question].questions_answer_1}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  w-48"
              onClick={() => {
                handleAnswerQuestion(quiz[question].questions_answer_2);
              }}
            >
              B: {quiz[question].questions_answer_2}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  w-48"
              onClick={() => {
                handleAnswerQuestion(quiz[question].questions_answer_3);
              }}
            >
              C: {quiz[question].questions_answer_3}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  w-48"
              onClick={() => {
                handleAnswerQuestion(quiz[question].questions_answer_4);
              }}
            >
              D: {quiz[question].questions_answer_4}
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <h1>Total quiz score: {score}</h1>
      <button onClick={() => exitQuiz()}>EXIT</button>

      {/* <h1>Lifelines:</h1>
            <button>Ask the audience</button>
            <button>50:50</button>
            <button>Phone a friend</button> */}
    </div>
  );
}
