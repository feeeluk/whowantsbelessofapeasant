import { Link } from "react-router-dom"
import logo from "./Picture2.png"
import './NavBar.css'


export function NavBar() {

    return (
        <div >
            <header className="flex flex-row items-center">
                <img src={logo} alt="Page logo, who wants to be less of a pesent." />
                <a className="p-2.5 text-slate-200 cursor-pointer" href="/">Home</a>
                <a className="p-2.5 text-slate-200 cursor-pointer" href="/AboutUs">About Us</a>
            </header>
        </div>
    )
}