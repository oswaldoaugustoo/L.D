const getCadastroHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <form id="formulario">
        <h1>Novo funcionario</h1>

    <label>Nome do Funcionário</label>
        <input id="nome" type="text" placeholder="Digite o seu nome" />
    <br /><br />

    <label>Cargo</label>
        <input
          id="cargo"
          type="text"
          placeholder="Digite o cargo do funcionário."
        />
    <br /><br />

    <label>Salário</label>
    <input
      id="salario"
      type="number"
      placeholder="Digite o salário do funcionário"
      />
    <br /><br />
    
    <div>
      <button id="cancelar" type="button">Cancelar</button>
      <button id="salvar" type="submit">Salvar</button>
    </div>
</form>
`

  main.innerHTML = dadosHtml
}

const getListaClientesHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
    <section>
      <h1>Lista de Clientes</h1>
      <table id="tbody">
        <tr>
          <th>Funcionario</th>
          <th>Cargo</th>
          <th>Salário</th>      
          <th id="novo"><a>Novo</a></th>
        </tr>
      </table>
    </section>
`
  main.innerHTML = dadosHtml
}

const getAtualizaHTML = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <form id="formulario">
        <h1>Editar Cliente</h1>

    <label>Nome do Cliente</label>
        <input id="name" type="text" placeholder="Digite o seu nome" />
    <br /><br />

    <label>Modelo</label>
        <input
          id="modelo"
          type="text"
          placeholder="Digite o modelo do veículo"
        />
    <br /><br />

    <label>Tipo</label>
          <select id="tipo" type="text" placeholder="Digite o tipo do veículo">
            <option value="1">Carro</option>
            <option value="0">Moto</option>
          </select>
    <br /><br />

    <label>Placa</label>
          <input id="placa" type="text" placeholder="Digite a placa do veículo" />
    <br /><br />

    <label>Observações</label>
          <input
            id="observacoes"
            type="text"
            placeholder="Digite a observação:"
          />
    <br /><br />
    
    <div>
      <button id="cancelar" type="button">Cancelar</button>
      <button id="salvar" type="submit">Atualizar</button>
    </div>
</form>
`

  main.innerHTML = dadosHtml
}

const getCheckinHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <section>
  <h2>Lista de Clientes no Estacionamento</h2>
  <br />
  <table id="tbody" class="tabela">
    <tr>
      <th>Modelo</th>
      <th>Placa</th>
      <th>Opção</th>
    </tr>
  </table>
  <div>
    <label>Placa</label>
    <select class="input" id="select"></select>
    <a type="button" id="adicionar-novo">Adicionar Novo</a>
    <br />
    <div class="btn">
      <button id="checkin" class="btn-link">Checkin</button>
    </div>
  </div>
</section>
`
  main.innerHTML = dadosHtml
}

const getCheckoutHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <section class="container">
  <h2>Dados do cliente</h2>
  <table class="tabela">
    <tr>
      <th>Cliente</th>
      <th>Modelo</th>
      <th>Placa</th>
    </tr>
    <tr id="tbody"></tr>
  </table>
  <div>
    <label>Total de Horas</label>
    <input
      id="totalHora"
      class="input"
      type="text"
      placeholder="Total de Horas"
      disabled
    />
  </div>
  <br />
  <div>
    <label>Valor a pagar</label>
    <input
      id="valorPagar"
      class="input"
      type="text"
      placeholder="Valor a pagar"
      disabled
    />
  </div>
  <br />
  <div cllass="btn">
    <button class="btn-link" id="finalizar">Finalizar</button>
  </div>
</section>
  `

  main.innerHTML = dadosHtml
}

const getFaturamentoHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <section>
  <h1>Lista de Faturamento</h1>
  <table class="tabela">
    <thead>
      <tr>
        <th>Qtd Veículos</th>
        <th>Total</th>
        <th>Dia</th>
      </tr>
    </thead>
    <tbody id="tbody"></tbody>
  </table>
  <div class="grafico">
    <div id="piechart_3d"></div>
  </div>
</section>
  `
  main.innerHTML = dadosHtml
}

const getCadastroUsuarioHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <form id="formulario">
        <h1>Para se cadastrar preencha seus dados:</h1>

    <label>Digite seu email:</label>
        <input id="emailUser" type="text" placeholder="Digite o seu email" />
    <br /><br />

    <label>Digite sua senha:</label>
        <input
          id="senhaUser"
          type="password"
          placeholder="Digite sua senha."
        />
    <br /><br />
    
    <div>
      <button id="cancelar" type="button">Cancelar</button>
      <button id="salvar" type="submit">Salvar</button>
    </div>
</form>
  `

  main.innerHTML = dadosHtml
}

const getLoginHtml = () => {
  const main = document.getElementById('root')
  const dadosHtml = `
  <form id="formulario">
        <h1>Preencha seus dados para fazer o login:</h1>

    <label>Digite seu email:</label>
        <input id="emailUser" type="text" placeholder="Digite o seu email" />
    <br /><br />

    <label>Digite sua senha:</label>
        <input
          id="senhaUser"
          type="password"
          placeholder="Digite sua senha."
        />
    <br /><br />
    
    <div>
      <button id="login" type="submit">Login</button>
    </div>
</form>
  `

  main.innerHTML = dadosHtml
}

export const view = {
  getListaClientesHtml,
  getCadastroHtml,
  getAtualizaHTML,
  getCheckinHtml,
  getCheckoutHtml,
  getFaturamentoHtml,
  getCadastroUsuarioHtml,
  getLoginHtml
}
