import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useAuth} from "@clerk/clerk-react"
export default function Quiz() {
  let [quiz, setQuiz] = useState(null);
  let [question, setQuestion] = useState(0);
  let [score, setScore] = useState(0);

  const { id } = useParams();
  const {userId} = useAuth()

  function handleAnswerQuestion(answer) {
    // finished the game will full marks
    if (answer === `${quiz[question].questions_final_answer}` && question === 14) {
      window.location.href = "https://whowantsbelessofapeasant-front.onrender.com/completed";
      submitScore(21, 15, 2)
    } else if (answer === `${quiz[question].questions_final_answer}`) {
      // answered a question
      setScore(score + quiz[question].questions_value);
      setQuestion(question + 1);

    } else {
      // failed to answer correctly
      submitScore(score, question - 1, 4)
      window.location.href = "https://whowantsbelessofapeasant-front.onrender.com/gameover";
    }
  }

  function exitQuiz() {
    // they chose to exit early. 
    submitScore(score, question - 1, 3)
    window.location.href = "https://whowantsbelessofapeasant-front.onrender.com/exit";
  }

  useEffect(() => {
    fetchQuiz();

    async function fetchQuiz() {
      const response = await fetch(`https://whowantsbelessofapeasant-front.onrender.com/quiz/${id}`);
      const quizData = await response.json(response.rows);
      setQuiz(quizData.reverse());
    }
  }, [question]);

  /*
  currentQuestion - 1 if wrong, 15 if all correct
  */

  async function submitScore(scoreDetails, currentQuestion, statusId) {
    const result = await fetch(`https://whowantsbelessofapeasant-front.onrender.com/users/${userId}`)
    const userInfoFromDatabase = await result.json()

    //console.log(id[0].user_id)

    console.log('submitting score')
    const score = await fetch(`https://whowantsbelessofapeasant-front.onrender.com/result`, {
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userInfoFromDatabase[0].user_id,
        quizId: id,
        statusId: statusId,
        question: currentQuestion,
        score: scoreDetails
      })
    })
  }

  return (
    <div className="text-lg text-slate-300">
      <h1>
        Quiz {id} - {quiz ? <>{quiz[question].category_name}</> : ""}
      </h1>

      {quiz ? (
        <div className="">
          <h2>Question number: {question + 1} / 15</h2>
          <h2>Question score: £{quiz[question].questions_value}</h2>
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
