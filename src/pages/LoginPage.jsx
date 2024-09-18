import React, { useState } from "react";
import LoginCard from "../cards/LoginCard";
import RegisterCard from "../cards/RegisterCard";

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleCard = () => {
        setShowLogin(!showLogin);
    };


    return(
        <div>
            {showLogin ? (
                <LoginCard toggleCard={toggleCard} />
                
            ) : (

                <RegisterCard toggleCard={toggleCard} />
            )}         
        </div>
    )
};

export default LoginPage;