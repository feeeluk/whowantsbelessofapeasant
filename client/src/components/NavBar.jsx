import { Link } from "react-router-dom"
import logo from "./Picture2.png"
import './NavBar.css'


export function NavBar() {

    return (
        <div className="flex-initia">
            <header >

                <img src={logo} alt="Page logo, who wants to be less of a pesent." />

            </header>
        </div>
    )
}