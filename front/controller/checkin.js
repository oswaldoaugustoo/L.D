import { service } from '../service/index.js'
import { view } from '../view/index.js'

export const sistemaLogin = () => {
  const email = []
  service.getUsuario().then(dados => {
    dados.forEach(element => {
      if (element.email != null) {
        email.push(element.email)
      }
    })
  })

  view.getLoginHtml()
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const loginEmail = {
      email: document.getElementById('emailUser').value,
      senha: document.getElementById('senhaUser').value
    }

    if (email.includes(loginEmail.email)) {
      service.postCheckin(loginEmail)
      window.location.href = './index.html'
      return alert('Você está logado!') //alert(`Esse email : ${loginEmail.email} já existe no banco.`)
    } else {
      return alert('Email ou senha incorrento.')
    }
    //console.log(cadastroCliente)
  })
}
