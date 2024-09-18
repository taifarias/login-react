import React from "react";

const LoginCard = ({ toggleCard }) => {

    return(
        <div className="bg-green-100 h-screen justify-center items-start flex">
            <section id='login-card'
             className="bg-slate-400 flex flex-col border-2 border-black rounded-lg w-96 mt-36 p-5 items-center">
                <h1 className="text-lg pb-8" >Faça seu login aqui</h1>
                        <form id='login-form' className=" flex flex-col items-center">
                            <input type="text" placeholder="id de funcionário" className="rounded-lg pl-4 mb-2" />
                            <input type="password" placeholder="senha" className="rounded-lg pl-4" />         

                            <button type="submit" className="border rounded bg-green-700 text-white px-3 py-1 ml-28 mt-4 mb-4">log in</button>
                        </form>

                <p>
                    Primeiro acesso? {" "}
                    <button onClick={toggleCard} className="text-green-700 hover:underline">
                    
                    Clique aqui
                    </button>
                 </p>

            </section>
        </div>
    )
};

export default LoginCard;

