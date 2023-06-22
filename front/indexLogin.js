import { sistemaLogin } from './controller/checkin.js'
const login = document.getElementById('login')

login.addEventListener('click', event => {
  sistemaLogin()
})
