'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const FormularioRegister = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
  toast.error("Erro na Aplicação")
  }
  return (
    <div>
      <h1>Registar</h1>
      <form onSubmit={handlerLogin}>
      <input placeholder='Nome' type="name">
        </input>
        <input placeholder='E-mail' type="email">
        </input>
        <input placeholder='Senha' type='password'>
        </input>
        <button>Registrar</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default FormularioRegister ;