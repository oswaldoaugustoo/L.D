import { openDatabase } from '../database.js'

export const cadastroUsuario = async (request, response) => {
  const { email, senha } = request.body
  const db = await openDatabase()
  const data = await db.run(
    `
    INSERT INTO usuarios (email, senha)
    VALUES (?, ?)
  `,
    [email, senha]
  )
  db.close()
  response.send({
    id: data.lastID,
    email,
    senha
  })
}

export const listUsuarios = async (request, response) => {
  const db = await openDatabase()
  const usuarios = await db.all(`
    SELECT * FROM usuarios
  `)
  db.close()
  response.send(usuarios)
}
