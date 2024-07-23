import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"


const PORT = 7070
const app = express()

app.use(express.json())
app.use(cors())
dotenv.config()

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
})



// GET ****************************************************************************
app.get('/', (request, response) => {
    response.json({message: `Root`})
})

app. get('/quizzes', async (request, response) => {
    try{
        const data = await db.query(`
                                    SELECT quizzes.quiz_id, quizzes.quiz_name, categories.category_name
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = category_id
                                    `)
        
        response.json(data.rows)
    }
     catch (error){
        response.json(error)
     }
})

app. get('/quiz_details', async (request, response) => {
    try{
        const data = await db.query(`
                                    SELECT quizzes.quiz_name, categories.category_name, questions.questions_number, questions.questions_question, questions.questions_answer_1, questions.questions_answer_2, questions.questions_answer_3, questions.questions_answer_4, questions.questions_final_answer
                                    FROM quizzes
                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id
                                    JOIN questions
                                    ON questions.questions_quiz_id = quizzes.quiz_id
                                    WHERE quiz_id != 0
                                    `)
        
        response.json(data.rows)
    }
     catch (error){
        response.json(error)
     }
})

app. get('/leaderboard', async (request, response) => {
    try{
        const data = await db.query(`
                                    SELECT users.user_name AS user, quizzes.quiz_name AS quiz, categories.category_name AS type, statuses.status_name AS status, user_quizzes.user_quiz_score AS score, user_quizzes.user_quiz_progress AS progress
                                    FROM user_quizzes

                                    JOIN statuses
                                    ON user_quizzes.user_quiz_status_id = statuses.status_id

                                    JOIN users
                                    ON user_quizzes.user_quiz_user_id = users.user_id

                                    JOIN quizzes
                                    ON user_quizzes.user_quiz_quiz_id = quizzes.quiz_id

                                    JOIN categories
                                    ON quizzes.quiz_category_id = categories.category_id

                                    WHERE user_quiz_status_id != 1

                                    ORDER BY user_quizzes.user_quiz_score DESC
                                    `)
        
        response.json(data.rows)
    }
     catch (error){
        response.json(error)
     }
})




app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})