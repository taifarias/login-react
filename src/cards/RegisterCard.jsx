import React, { useState } from "react";

const RegisterCard = ({ toggleCard }) => {

    const novoFuncionario = {
        id: '',
        date: '',
        nome: '',
        sobrenome: '',
        cargo: '',
        senha: ''
      }
  
      const [ funcionario, setFuncionario] = useState(novoFuncionario)
  
      function handleChange(e) {
        const { name, value } = e.target;
  
        setFuncionario({...funcionario, [name]: value})
      }
  
  
  
      function handleSubmit(e) {
        e.preventDefault()
        
        
        console.log(funcionario)
      }
    return(
    <div className="bg-green-100 h-screen justify-center items-start flex">    
        <section id="register-card" className="bg-slate-400 flex flex-col border-3 border-black rounded-lg w-96 mt-36 p-5 items-center  ">
          <h1 className="text-lg pb-10">Faça seu cadastro</h1>

          <form onSubmit={handleSubmit} id="register-form" className=" flex flex-col">
            <div>
              <input type="text" placeholder="ID de funcionário" name="id" className="rounded-lg pl-4 mb-2 w-40 mr-5" onChange={handleChange} />
              <input type="date" name="date" className="rounded-lg pl-4 mb-2 w-40" onChange={handleChange}  />
            </div>
            
            <div>
              <input type="text" placeholder="Nome" name="nome" className="rounded-lg pl-4 mb-2 w-40 mr-5" onChange={handleChange}  />
              <input type="text" placeholder="Sobrenome" name="sobrenome" className="rounded-lg pl-4 mb-2 w-40" onChange={handleChange}  />
            </div>

            <div>
              <input type="text" placeholder="Cargo" name="cargo" className="rounded-lg pl-4 mb-2 w-40 mr-5" onChange={handleChange}  />
            
              <input type="password" placeholder="Senha" name="senha" className="rounded-lg pl-4 w-40" onChange={handleChange} />     
            </div>
              

            <button type="submit" className="border rounded bg-green-700 text-white px-3 py-1 ml-56 mt-4 mb-4 w-24">Cadastrar</button>
          </form>

          <p>
             Já tem cadastro?{" "}
                <button onClick={toggleCard} className="text-blue-500 hover:underline">
                Volte para o login
                </button>
            </p>

      </section>
    </div>
    )
};

export default RegisterCard;