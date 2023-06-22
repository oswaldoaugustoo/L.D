import { CadastroComponent } from './controller/cadastro.js'
import { FaturamentoComponent } from './controller/faturamento.js'
import { ListaClienteComponent } from './controller/lista-Clientes.js'
import { UsuarioCadastroComponent } from './controller/cadastroUsuario.js'
import {  sistemaLogin } from './controller/checkin.js'

//const link = document.getElementById('link')
/* link.addEventListener('click', event => {
  const option = event.path[0].innerText 


  switch (option) {
    case 'Cadastro':
      CadastroComponent()
      break
    case 'Clientes':
      ListaClienteComponent()
      break
    case 'Checkin': {
      window.location.href = './checkin.html'
      break
    }
    default:
      break
  }
})
 */
const cadastro = document.getElementById('cadastro')
const listacliente = document.getElementById('clientes')
const checkin = document.getElementById('checkin')
const faturamento = document.getElementById('faturamento')
const cadastroUsuario = document.getElementById('cadastroUser')
const login = document.getElementById('login')
cadastro.addEventListener('click', event => {
  CadastroComponent()
  /* const option = event.path[0].innerText
  
  switch (option) {
    case 'Cadastro':
      break
      ListaClienteComponent()
      case 'Clientes':
  } */
})

listacliente.addEventListener('click', event => {
  ListaClienteComponent()
  /* const option = event.path[0].innerText
  
  switch (option) {
    case 'Cadastro':
      CadastroComponent()
      break
      case 'Clientes':
  } */
})
/* 
checkin.addEventListener('click', event => {
  window.location.href = './checkin.html'
})
 */
/* faturamento.addEventListener('click', event => {
  FaturamentoComponent()
})
 */
cadastroUsuario.addEventListener('click', event => {
  UsuarioCadastroComponent()
})

login.addEventListener('click', event => {
  sistemaLogin()
})
