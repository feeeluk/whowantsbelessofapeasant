import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState({});

  const { userId } = useAuth();
  console.log("Auth", userId);

  console.log(user);

  useEffect(() => {
    fetchUsers();
  }, [userId]);

  async function fetchUsers() {
    // const result = await fetch(`https://whowantsbelessofapeasant-front.onrender.com/users/user_2jglOHdsCzremH2ATCB4tubuTeC`)
    const result = await fetch(`https://whowantsbelessofapeasant.onrender.com/users/${userId}`);
    const userData = await result.json();
    setUser(userData[0]);
  }

  return (
    <div>
      <div>
        <h1 className="text-5xl flex flex-row items-center  text-slate-200">
          Username: {user.user_name}
        </h1>
      </div>
      <div className="flex flex-col py-5 text-slate-200">
        <p className="py-5">Bio: {user.user_bio}</p>
        <p className="py-5">Favorite subject: {user.user_favourite_subject}</p>
      </div>
    </div>
  );
}
