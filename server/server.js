import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";


const PORT = 7070;
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

const db = new pg.Pool({
    connectionString: process.env.DB_CONNECTION
});



// GET ****************************************************************************
app.get('/', (request, response) => {
    response.json({ message: `Root` })
});

// get info from superbase about clerk-login
app.get("/users/:id", async (request, response) => {
    const id = request.params.id;
    console.log("/users/:id log: ", id);
    const result = await db.query(`SELECT * FROM users WHERE user_clerk_id = $1`, [id]);

    //    SELECT id FROM wkseven_users WHERE username = $1`,[username]);
    // console.log(result)
    response.json(result.rows);
});

// put info into superbase about clerk-login
app.post("/sign-up", async (request, response) => {
    const { user_name, user_clerk_id, user_bio, user_favourite_subject } = request.body;
    console.log("/sign-up request body: ", request.body);
    console.log("/sign-up user_name: ", user_name);
    await db.query(`INSERT INTO users (user_name, user_clerk_id, user_bio, user_favourite_subject)
        VALUES ($1, $2, $3, $4) `, [user_name, user_clerk_id, user_bio, user_favourite_subject]);
    response.send("Thanks for submitting");

    await db.query(
        `
    INSERT INTO wkseven_reviews (title, content, username_id, relationship_id, category_id)
    VALUES ($1, $2, $3, $4, $5)
  `,

        [title, content, usernameId, relationship, category]
    );

});

//user_name, user_clerk_id, user_bio, user_favourite_subject

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
});