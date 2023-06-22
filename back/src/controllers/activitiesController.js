import { openDatabase } from '../database.js'

export const activityCheckin = async (request, response) => {
  const { email } = request.body

  const db = await openDatabase()

  const login = await db.get(
    `
    SELECT * FROM usuarios WHERE email = ?
  `,
    [email]
  )
  if (login) {
    const loginAt = new Date().getTime()
    const data = await db.run(
      `
  INSERT INTO activities (user_email, senha_email)
  VALUES (?, ?)
  `,
      [login.id, loginAt]
    )
    db.close()
    response.send({
      login_id: login.id,
      login_at: loginAt,
      message: `Você está logado.`
    })
    return
  }
  db.close()
  response /*.status(400)*/
    .send({
      message: `Email não cadastrado.`
    })
}

export const activityCheckout = async (request, response) => {
  const { label, price } = request.body

  const db = await openDatabase()

  const vehicle = await db.get(
    `
    SELECT * FROM vehicles WHERE label = ?
  `,
    [label]
  )
  if (vehicle) {
    const activityOpen = await db.get(
      `
    SELECT *
      FROM activities 
     WHERE vehicle_id = ?
      AND checkout_at IS NULL
  `,
      [vehicle.id]
    )

    if (activityOpen) {
      const checkoutAt = new Date().getTime()
      const data = await db.run(
        `
    UPDATE activities 
      SET ckeckout_at = ?, 
        price = ?
      WHERE id = ?
    `,
        [checkoutAt, price, activityOpen.id]
      )
      db.close()
      response.send({
        vehicle_id: vehicle.id,
        checkout_at: checkoutAt,
        price: price,
        message: `Veículo [${vehicle.label}] saiu Do estacionamento.`
      })
      return
    }
    db.close()
    response.status(400).send({
      message: `Veículo [${label}] não realizou nenhum check-in`
    })
    return
  }
  db.close()
  response.status(400).send({
    message: `Veículo [${label}] não cadastrado`
  })
}

export const removeActivity = async (request, response) => {
  const { id } = request.params
  const db = await openDatabase()
  const data = await db.run(
    `
    DELETE FROM activities 
    WHERE id =?
  `,
    [id]
  )
  db.close()
  response.send({
    id,
    message: `Atividade [${id}] removida com sucesso`
  })
}

export const listActivities = async (request, response) => {
  const db = await openDatabase()
  const logins = await db.all(`
    SELECT * FROM login
  `)
  db.close()
  response.send(logins)
}
