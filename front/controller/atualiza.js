import { service } from '../service/index.js'
import { view } from '../view/index.js'
import { ListaClienteComponent } from './lista-Clientes.js'

export const AtualizaComponent = idParametro => {
  const label = []
  service.getVeiculo().then(dados => {
    dados.forEach(element => {
      if (element.label != null) {
        label.push(element.label)
      }
    })
  })

  view.getAtualizaHTML()

  service.getVeiculo().then(dados => {
    dados.forEach(element => {
      if (element.id == idParametro) {
        console.log(element)
        adicionaParametroNoInput(element)
      }
    })
  })
  const formulario = document.getElementById('formulario')
  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const atualizaCliente = {
      owner: document.getElementById('name').value,
      model: document.getElementById('modelo').value,
      type: document.getElementById('tipo').value,
      label: document.getElementById('placa').value,
      observation: document.getElementById('observacoes').value
    }

    if (label.includes(atualizaCliente.label)) {
      return alert(`Essa placa : ${atualizaCliente.label} já existe no banco.`)
    } else {
      service.putVeiculo(atualizaCliente, idParametro).then(() => {
        cancelar()
        ListaClienteComponent()
      })
    }
  })
}

const adicionaParametroNoInput = objeto => {
  document.getElementById('name').value = objeto.owner
  document.getElementById('modelo').value = objeto.model
  document.getElementById('tipo').value = objeto.type
  document.getElementById('placa').value = objeto.label
  document.getElementById('observacoes').value = objeto.observation
}
const cancelar = () => {
  const formulario = document.getElementById('formulario')
  formulario.reset()
}
