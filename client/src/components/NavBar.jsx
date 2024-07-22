import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import logo from "./Picture2.png"
import './NavBar.css'
import { AboutUs } from "../Pages/AboutUs"


export function NavBar() {

    return (
        <div >
            <header className="flex flex-row items-center">
                <img src={logo} alt="Page logo, who wants to be less of a pesent." />
                <ol className="flex flex-row items-center">
                    <li><Link to="/" className="p-2.5 text-slate-200 cursor-pointer">Home</Link></li>
                    <li><Link to="/aboutus" className="p-2.5 text-slate-200 cursor-pointer">About Us</Link></li>
                </ol>
            </header>
        </div>
    )
}