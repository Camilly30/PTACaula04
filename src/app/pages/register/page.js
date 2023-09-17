'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Link from "next/link"; 

const FormularioRegister = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
  toast.error("Erro na Aplicação")
  }
 
  return (
    <div className="login">
      <div class="card-header"><h1>Registar</h1></div>
      <div className="b">
         <form class="card"onSubmit={handlerLogin}>
           <div class="card-content">
             <div class="card-content-area"><input placeholder='Nome' type="name" ></input></div>
             <div class="card-content-area"><input placeholder='E-mail' type="email" ></input></div>
             <div class="card-content-area"><input placeholder='Senha' type="password" ></input></div>
           </div>
              <button>Registrar</button>
            <ToastContainer/>
      </form>
      <p><Link href="/pages/dashboard">Dashboard</Link></p>
      </div>
    </div>
  )
}

export default FormularioRegister ;