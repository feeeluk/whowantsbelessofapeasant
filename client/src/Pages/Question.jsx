export function Question({question, answer_1, answer_2, answer_3, answer_4}){
    return(
        <>
    
       <h2>Quesion #: (array){question}</h2>
            <h2>Question: {question}</h2>
            <h2>Answer 1: {answer_1}</h2>
            <h2>Answer 2: {answer_2}</h2>
            <h2>Answer 3: {answer_3}</h2>
            <h2>Answer 4: {answer_4}</h2>
        
        </>
    )
}