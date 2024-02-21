import { useState } from "react";
import {Link} from "react-router-dom"
import useLoginStatus from "../utils/useLoginStatus";

const Header = () => {
   const [btnLogging, setBtnLogging] = useState("Login");

   const status = useLoginStatus();

    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ec/02/b6/ec02b67a-4178-3943-d92e-01b747c98e03/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Online status: {status? "✅": "🛑"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
                <li>
                    <button className="btn-Login"
                     onClick={() => {btnLogging === "Login" ? setBtnLogging("Logout") : setBtnLogging("Login");}}> {btnLogging}
                    </button>
                </li>
            </ul>
        </div>
    </div>
)
    }

export default Header;