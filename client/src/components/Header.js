import React, { useState } from 'react';
import './generic.css'

const LoginDropdown = ({className}) => {
    return (
        <ul className={className}>
            <li><a href="/auth/google">Sign up or Login with Google</a></li>
            <li><a href="/login">Sign up</a></li>
        </ul>
    )
}

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav>
                <div className="nav-wrapper">
                <a href="/" className="brand-logo right">Argumes</a>
                <ul className="left hide-on-med-and-down">
                    <li><a href="/surveys">Dashboard</a></li>
                    <li><a href="/survey/new">Create Survey</a></li>
                    <li>
                        <a href="#" onClick={() => setIsActive(!isActive) }>Login</a>
                    </li> 
                </ul>
                
                <LoginDropdown className={`menu ${isActive ? "active" : "inactive"}`}/>
            </div>
      </nav>
    );
}

export default Header;