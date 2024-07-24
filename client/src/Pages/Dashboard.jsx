import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [user, setUser] = useState({})

    const { userId } = useAuth();
    console.log("Auth", userId);

    console.log(user);

    useEffect(() => {
        fetchUsers();
    }, [userId])

    async function fetchUsers() {


        // const result = await fetch(`http://localhost:7070/users/user_2jglOHdsCzremH2ATCB4tubuTeC`)
        const result = await fetch(`http://localhost:7070/users/${userId}`);
        const userData = await result.json();
        setUser(userData[0]);

    }


    return (
        <div>
            <div>
                <h1 className="text-5xl flex flex-row items-center  text-slate-200">{user.user_name}</h1>
            </div>
            <div className="flex flex-col py-5 text-slate-200">
                <p className="py-5">{user.user_bio}</p>
                <p className="py-5">{user.user_favourite_subject}</p>
            </div>
        </div>

    )
}