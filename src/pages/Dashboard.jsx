import React from "react";

const Dashboard = () => {

    return(
         <div>
            <div className="bg-500 h-screen px-6">
                <h1 className="font-bold font-title text-100 text-5xl  py-9"> Olá, Nome!</h1>
                
                <h3 className="font-mid text-100 pb-5">Aqui você irá encontrar todas as informações que precisa.</h3>


                <section id="func" className="bg-100 rounded-lg px-8 py-5">
                    <h3 className="font-mid font-bold text-sm text-300 pb-4">INFORMAÇÕES PESSOAIS</h3>
                    <div className="font-p text-sm text-500">
                        <p className="pb-1">Nome: nome sobrenome </p>
                        <p className="pb-1">ID de funcionario: id1234 </p>
                        <p className="pb-1">Cargo: cargo </p>
                        <p className="pb-1">Data de admissão: date</p>
                    </div>
                    

                </section>


                <section id="escala" className="border rounded-md p-5 font-bold mt-5 bg-300 ">
                    <h3 className="font-mid font-bold text-sm text-100 pb-4">ESCALA</h3>

                    <p className="font-p font-light text-sm text-center w-full text-100 my-5"> default: Você ainda não tem uma escala</p>

                    <button className="ml-20 mt-24 font-p text-sm text-500 bg-100 rounded-full px-8 py-2">SOLICITAR ESCALA</button>

                    <p className="font-p text-sm text-center w-full text-100 mt-8 ">você solicitou uma escala em:
                        <p className="font-mid text-500">*dia e hora* </p> 
                    </p>

                </section>

                <section className="bg-100 rounded-lg px-8 py-5 mt-5 ">
                <h3 className="font-mid font-bold text-sm text-300 pb-6">SOLICITAÇÕES</h3>
                <div className="flex flex-col justify-center items-center ">                   
                    <button className="font-p text-sm text-100 bg-200 rounded-full px-8 py-2 mb-5">Solicitar revisao de ponto</button>
                    <button className="font-p text-sm text-100 bg-300 rounded-full px-16 py-2">Solicitar contato</button>
                </div>
                 
                </section>

{/* 

<div>
   
   

   
    
</div>

      

<div>
<button>Bater o ponto</button> //função de escrever a hora

<card>
    <p>Entrou: *hora que bateu o ponto*</p>
    <p>Saiu: *hora que bateu o ponto*</p>
</card>
</div>



<div>
Solicitar revisao de ponto.
</div>

<div>
Entrar em contato com supervisor.
</div> */}

            </div>
          
          </div>
    )

   

}

export default Dashboard;