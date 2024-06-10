import { useState, useEffect } from 'react';




export default function PaginaEditarCadastro() {

    return (
    <form>
        <input
            type="text"
            id="Nome-Completo"
            name="message"
            placeholder="eduardo ribarski"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
             <input
            type="text"
            id="Email"
            name="message"
            placeholder="eduardo@gmail.com"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
             <input
            type="text"
            id="telefone"
            name="message"
            placeholder="48996325450"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
             <input
            type="text"
            id="cpf"
            name="message"
            placeholder="10010010001"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
             <input
            type="text"
            id="cep"
            name="message"
            placeholder="88960000"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
          <input
            type="text"
            id="logradouro"
            name="message"
            placeholder="caetano lummert"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
          <input
            type="text"
            id="senha"
            name="message"
            placeholder="censurado"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
             <input
            type="text"
            id="confirmacao"
            name="message"
            placeholder="censurado"
            className="mt-5 p-3 text-lg border-2 border-gray-300 rounded-md flex-1"
          />
    </form>
        
    )
}