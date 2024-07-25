import { Link, Route, Routes, BrowserRouter } from "react-router-dom"
import logo from "./Picture2.png"
import './NavBar.css'
import { AboutUs } from "../Pages/AboutUs"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";



export function NavBar() {

    return (
        <div >
            <header className="flex flex-row items-center">
                <img src={logo} alt="Page logo -  Who wants to be less of a peasant?" className="w-25 h-25"/>
                <ol className="flex flex-row items-center">
                    <li><Link to="/" className="p-2.5 text-slate-200 cursor-pointer">Home</Link></li>
                    <li><Link to="/aboutus" className="p-2.5 text-slate-200 cursor-pointer">About Us</Link></li>
                    <li><Link to="/leaderboard" className="p-2.5 text-slate-200 cursor-pointer">Leaderboard</Link></li>
                    <li><Link to="/dashboard" className="p-2.5 text-slate-200 cursor-pointer">Dashboard</Link></li>
                </ol>
                <div className="flex flex-row-reverse text-white">
                    {/* <li><Link to="/sign-up" className="text-slate-200 cursor-pointer">Sign Up</Link></li> */}
                    <SignedOut>
                        <SignInButton signUpForceRedirectUrl='/sign-up' />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </header>

        </div>
    )
}