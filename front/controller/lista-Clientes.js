import { service } from '../service/index.js'
import { view } from '../view/index.js'
import { AtualizaComponent } from './atualiza.js'

export const ListaClienteComponent = () => {
  view.getListaClientesHtml()

  service.getFuncionario().then(dados => {
    dados.forEach(element => {
      if (element.nome != null && element.cargo != null) {
        console.log(element)
       criarNovaLinha(element.nome, element.cargo, element.salario, element.id)
      }
    })
  })
  /*   const table = document.getElementById('tbody')
  table.addEventListener('click', event => {
    const button = event.path[0].innerText
    const id = event.path[0].id
    if (button === 'Editar') {
      AtualizaComponent(id)
    }
    if (button === 'Excluir') {
      deletar(id)
    }
    if (button === 'Novo') {
      console.log(button)
    }
  }) */
}

const criarNovaLinha = (nome, cargo, salario, id) => {
  const table = document.getElementById('tbody')
  const NovaLinha = document.createElement('tr')
  const dadosHtml = `
  <td class="none">${nome}</td>
  <td>${cargo}</td>
  <td>${salario}</td>
  <td>
    <div class="lista-btn">
      <a id="${id}" class="btn-link editar" id="editar" >Editar</a>
      <a id="${id}" class="btn-link" type="button" id="excluir">Excluir</a>
    </div>
  </td>
  `

  NovaLinha.innerHTML = dadosHtml
  return table.appendChild(NovaLinha)
}

/* const deletar = id => {
  service.deletaVeiculo(id).then(() => {
    ListaClienteComponent()
  })
}
 */
