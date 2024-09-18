import React from "react";

const LoginCard = ({ toggleCard }) => {

    return(
        <div className="bg-400 h-screen justify-center items-start flex ">
            <section id='login-card'
             className="bg-500 flex flex-col rounded-lg w-96 mt-36 p-5 items-center py-10">
                <h1 className="text-xl font-title font-semibold text-100 pb-8" >LOGIN</h1>
                        <form id='login-form' className=" flex flex-col items-center">
                            <input type="text" placeholder="ID de funcionário" className="rounded-xl pl-4 mb-5 py-1" />
                            
                            <input type="password" placeholder="Senha" className="rounded-xl pl-4 mb-5 py-1" />         

                            <button type="submit" className=" rounded-full bg-300 text-100 px-6 py-1 ml-28 mt-4 mb-4 font-p ">Entrar</button>
                        </form>

                <p className="flex flex-col text-100 text-sm">
                    <p className="font-p"> Primeiro acesso?</p>
                   
                    <button onClick={toggleCard} className="text-100 hover:underline font-p">
                    
                    Clique aqui
                    </button>
                 </p>

            </section>
        </div>
    )
};

export default LoginCard;

