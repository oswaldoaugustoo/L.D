import { openDatabase } from '../database.js'

export const listFuncionarios = async (request, response) => {
  const db = await openDatabase()
  const funcionarios = await db.all(`
    SELECT * FROM funcionarios
  `)
  db.close()
  response.send(funcionarios)
}

export const cadastroFuncionario = async (request, response) => {
  const { nome, cargo, salario } = request.body
  const db = await openDatabase()
  const data = await db.run(
    `
    INSERT INTO funcionarios (nome, cargo, salario)
    VALUES (?, ?, ?)
  `,
    [nome, cargo, salario]
  )
  db.close()
  response.send({
    id: data.lastID,
    nome,
    cargo,
    salario
  })
}

export const updateFuncionario = async (request, response) => {
  const { nome, cargo, salario } = request.body
  const { id } = request.params

  const db = await openDatabase()

  const funcionario = await db.get(
    `
    SELECT * FROM funcionarios WHERE id = ?
  `,
    [id]
  )

  if (funcionario) {
    const data = await db.run(
      `
      UPDATE funcionario SET 
      nome = ?,
      cargo = ?,
      salario = ?,
      WHERE id = ?
    `,
      [nome, cargo, salario, id]
    )
    db.close()

    response.send({
      id,
      nome,
      cargo,
      salario
    })
    return
  }

  db.close()

  response.send(funcionario || {})
}

export const removeFuncionario = async (request, response) => {
  const { id } = request.params
  const db = await openDatabase()
  const data = await db.run(
    `
    DELETE FROM funcionarios 
    WHERE id =?
  `,
    [id]
  )
  db.close()
  response.send({
    id,
    message: `O ID [${id}] foi deletado com sucesso.`
  })
}
