'use client'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const FormAlterar= () => {
 

  const handlerLogin = async (e) => {
    e.preventDefault();

    // Display a toast message using the toast.error function
    toast.error('Erro na Aplicação');
  };

  return (
    <div className="login">
      <div className="card-header">
        <h1>Alterar</h1>
      </div>
      <div className="b">
        <form className="card" onSubmit={handlerLogin}>
          <div className="card-content">
            <div className="card-content-area">
              <input
                placeholder="Nome"
                type="name"
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              ></input>
            </div>
            <div className="card-content-area">
              <input
                placeholder="E-mail"
                type="email"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              ></input>
            </div>
            <div className="card-content-area">
              <input
                placeholder="Senha"
                type="password"
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                }}
              ></input>
            </div>
          </div>
          <button>Alterar</button>
          <ToastContainer />
        </form>
        <p>
          <Link href="/pages/dashboard">Dashboard</Link>
        </p>
      </div>
    </div>
  );
};

export default FormAlterar;


