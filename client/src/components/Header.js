import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from "./Payments"

import './generic.css'

const LoginDropdown = ({className}) => {
    return (
        <ul className={className}>
            <li><a href="/auth/google">Sign up or Login with Google</a></li>
            <li><a href="/login">Sign up</a></li>
        </ul>
    )
}

const Header = (props) => {
    const [isActive, setIsActive] = useState(false);

    const renderLinks = ()=> {
        switch (props.auth) {
            case null:
                return "In progress"
            case false:
                return (
                    <>
                        <ul className="left hide-on-med-and-down">
                            <li>
                                <a href="#" onClick={() => setIsActive(!isActive) }>Login</a>
                            </li>
                        </ul>
                        <LoginDropdown className={`menu ${isActive ? "active" : "inactive"}`}/>
                    </>
                )     
            default:
                return  (
                    <ul className="left hide-on-med-and-down">
                        <li><a href="/surveys">Dashboard</a></li>
                        <li><a href="/survey/new">Create Survey</a></li>
                        <li><Payments /></li>
                        <li style={{margin: '0 10px'}}>Credits:{props.auth.credits}</li>
                        <li>
                            <a href="api/logout">Log Out</a>
                        </li>
                    </ul>
                )    
        }
    }
    //console.log(props);
    return (
        <nav>
                <div className="nav-wrapper">
                <Link 
                    to={props.auth ? '/surveys' : '/'} 
                    className="brand-logo right"
                >
                    Argumes
                </Link>
                {renderLinks()}
            </div>
      </nav>
    );
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);