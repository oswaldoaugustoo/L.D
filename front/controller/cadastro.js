import { service } from '../service/index.js'
import { view } from '../view/index.js'

export const CadastroComponent = () => {
  const nome = []
  service.getFuncionario().then(dados => {
    dados.forEach(element => {
      if (element.nome != null) {
        nome.push(element.nome)
      }
    })
  })

  view.getCadastroHtml()
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const cadasrtoFuncionario = {
      nome: document.getElementById('nome').value,
      cargo: document.getElementById('cargo').value,
      salario: document.getElementById('salario').value
    }

    if (nome.includes(cadasrtoFuncionario.nome)) {
      return alert(
        `Esse funcionario : ${cadasrtoFuncionario.nome} já existe no banco.`
      )
    } else {
      service.postFuncionario(cadasrtoFuncionario)
    }
    //console.log(cadastroCliente)
  })
}
