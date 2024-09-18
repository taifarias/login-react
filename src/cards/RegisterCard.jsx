import React, { useState } from "react";

const RegisterCard = ({ toggleCard }) => {

    const novoFuncionario = {
        id: '',
        date: '',
        nome: '',
        sobrenome: '',
        email: ' ',
        telefone: ' ',
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
    <div className="bg-400 h-screen justify-center items-start flex">    
        <section id='login-card'
             className="bg-500 flex flex-col rounded-lg w-96 mt-36 p-5 items-center py-10">
        <h1 className="text-xl font-title font-semibold text-100 pb-8">CADASTRO</h1>

          <form onSubmit={handleSubmit} id="register-form" className=" flex flex-col">
            <div>
              <input type="text" placeholder="ID de funcionário" name="id" className="rounded-xl pl-4 mb-4 w-40 mr-5 py-1" onChange={handleChange} />
              <input type="date" name="date" className="rounded-xl pl-4 mb-4 w-40 py-1" onChange={handleChange}  />
            </div>
            
            <div>
              <input type="text" placeholder="Nome" name="nome" className="rounded-xl pl-4 mb-4 w-40 mr-5 py-1" onChange={handleChange}  />
              <input type="text" placeholder="Sobrenome" name="sobrenome" className="rounded-xl pl-4 mb-4 w-40 py-1" onChange={handleChange}  />
            </div>

            <div>
              <input type="email" placeholder="E-mail" name="nome" className="rounded-xl pl-4 mb-4 w-40 mr-5 py-1" onChange={handleChange}  />
              <input type="number" placeholder="Telefone" name="sobrenome" className="rounded-xl pl-4 mb-4 w-40 py-1" onChange={handleChange}  />
            </div>

            <div>
              <input type="text" placeholder="Cargo" name="cargo" className="rounded-xl pl-4 mb-2 w-40 mr-5 py-1" onChange={handleChange}  />
            
              <input type="password" placeholder="Senha" name="senha" className="rounded-xl pl-4 w-40 py-1" onChange={handleChange} />     
            </div>
              

            <button type="submit" className=" rounded-full bg-300 text-100 px-1 py-1 ml-28 mt-4 mb-4 font-p">Cadastrar</button>
          </form>

          <p className="flex flex-col text-100 font-p text-sm mt-10">
                    <p className=""> Já tem cadastro?</p>
                   
                    <button onClick={toggleCard} className="text-100 hover:underline">
                    
                  Clique Aqui
                    </button>
                 </p>

      </section>
    </div>
    )
};

export default RegisterCard;