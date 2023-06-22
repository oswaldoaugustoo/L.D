const url = 'http://localhost:8000/api'

// ---------POST ----------
const postFuncionario = objetoCliente => {
  console.log('objetoCliente: ', JSON.stringify(objetoCliente))
  return fetch(url + '/funcionarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objetoCliente)
  }).then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      alert(`Sucesso ao salvar: ${response.status}`)
    }
  })
}

const postCheckin = label => {
  return fetch(url + '/login/logado', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ label })
  }).then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

const postUsuario = objetoCliente => {
  console.log('objetoCliente: ', JSON.stringify(objetoCliente))
  return fetch(url + '/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objetoCliente)
  }).then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      alert(`Sucesso ao salvar: ${response.status}`)
    }
  })
}

// ------------ GET -----------------------
const getFuncionario = () => {
  return fetch(url + '/funcionarios').then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

const getActivities = () => {
  return fetch(url + '/login').then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

const getUsuario = () => {
  return fetch(url + '/usuarios').then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

// ----------- PUT --------------------
const putVeiculo = (objetoCliente, id) => {
  return fetch(`${url}/vehicles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objetoCliente)
  }).then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

const putCheckout = objeto => {
  return fetch(url + '/activities/checkout', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(objeto)
  }).then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

// ------------- DELETE ---------------
const deletaVeiculo = id => {
  return fetch(`${url}/vehicles/${id}`, {
    method: 'DELETE'
  }).then(response => {
    if (response.status != 200) {
      console.log(`Erro no servidor: ${response.status}`)
    } else {
      return response.json()
    }
  })
}

// ------------- EXPORT ---------------
export const service = {
  postFuncionario,
  getFuncionario,
  putVeiculo,
  deletaVeiculo,
  getActivities,
  postCheckin,
  putCheckout,
  postUsuario,
  getUsuario
}
