import { service } from '../service/index.js'
import { view } from '../view/index.js'

export const UsuarioCadastroComponent = () => {
  const email = []
  service.getUsuario().then(dados => {
    dados.forEach(element => {
      if (element.email != null) {
        email.push(element.email)
      }
    })
  })

  view.getCadastroUsuarioHtml()
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const cadastroUsuario = {
      email: document.getElementById('emailUser').value,
      senha: document.getElementById('senhaUser').value
    }

    if (email.includes(cadastroUsuario.email)) {
      return alert(`Esse email : ${cadastroUsuario.email} já existe no banco.`)
    } else {
      service.postUsuario(cadastroUsuario)
    }
    //console.log(cadastroCliente)
  })
}
