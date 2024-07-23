import { useParams } from "react-router-dom"

export default function Quiz(){

    const {id} = useParams()

    return(
        <>
            <h1>Quiz {id}</h1>
        </>
    )
}