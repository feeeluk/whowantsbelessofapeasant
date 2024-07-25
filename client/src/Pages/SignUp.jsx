import { useState } from "react";
import { useAuth } from "@clerk/clerk-react";

export default function SignUpPage() {
  const [form, setData] = useState({
    user_name: "",
    user_clerk_id: "",
    user_bio: "",
    user_favourite_subject: "",
  });

  const { userId } = useAuth();
  console.log(userId);

  function handleChange(event) {
    setData({
      ...form,
      user_clerk_id: userId,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:7070/sign-up`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // POST to express
  }
  return (
    <div className="flex flex-col py-5 text-sky-500">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="user_name">Username: </label>
        <input
          placeholder="user_name"
          onChange={handleChange}
          id="user_name"
          name="user_name"
        />
        <p></p>
        <label htmlFor="user_bio">Tell us a Little About Yourself: </label>
        <input
          placeholder="user_bio"
          onChange={handleChange}
          id="user_bio"
          name="user_bio"
        />
        <p></p>
        <label htmlFor="user_favourite_subject">Favourite Quiz Subject: </label>
        <input
          placeholder="user_favourite_subject"
          onChange={handleChange}
          id="user_favourite_subject"
          name="user_favourite_subject"
        />
        <p></p>

        <button className="font-bold py-2 px-3 rounded" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}

/* 
user_name, user_clerk_id, user_bio, user_favourite_subject 
1. put your user form together 
2. react-style form 
3. posts user info (clerk_id (other stuff)) 
4. to the express server
5. the express server puts the user into into postgres. 
*/
