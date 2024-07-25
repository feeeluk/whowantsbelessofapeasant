export default function Completed() {
    function okContinue() {
      window.location.href = "http://localhost:5173";
    }
  
    return (
      <div className="px-7">
        <section className="text-5xl flex flex-row items-center  text-slate-200">
          <h1>Congratulations! You have completed the quiz!</h1>
        </section>
        <div className="flex flex-col py-5 text-slate-200">
          <p className="py-5">
            Your score will be saved and added to the leaderboard.
          </p>
  
          <button onClick={() => okContinue()}>Okay</button>
        </div>
      </div>
    );
  }
  