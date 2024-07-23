import { useState, useEffect } from 'react'

export default function Leaderboard() {

    let [leaderboard, setLeaderboard] = useState([])
    useEffect( () => {
  
      fetchLeaderboard()
  
      async function fetchLeaderboard(){
        const response = await fetch("http://localhost:7070/leaderboard")
        const leaderboardData = await response.json(response.rows)
        setLeaderboard(leaderboardData)
      }
    },[])


    return (
        <div className="px-7">
            <section className="text-5xl flex flex-row items-center  text-slate-200">
                <h1>Leaderboard</h1>
            </section>

            <div>
            {leaderboard.map( (item) => {
                return(
                    <h5>{item.user} - {item.quiz} - {item.type} - {item.status} - {item.score} - {item.progress}</h5>
                )
                })}
            </div>

        </div>
    )
}