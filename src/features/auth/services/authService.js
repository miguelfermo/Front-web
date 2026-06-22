import { readStorage, writeStorage } from '@/shared/storage/localStorage'

export function login({ name, password }) {
  const users = readStorage('users', [])
  const user = users.find(u => u.name === name)
  if (!user) throw new Error('Usuário não encontrado.')
  if (user.password !== password) throw new Error('Senha incorreta.')
  writeStorage('currentUser', user)
  return user
}

export function register({ name, email, password }) {
  const users = readStorage('users', [])
  if (users.some(u => u.email === email)) throw new Error('Usuário já cadastrado.')
  const user = { name, email, password }
  users.push(user)
  writeStorage('users', users)
  writeStorage('currentUser', user)
  return user
}

export function updateUser(updatedUser) {
  const users = readStorage('users', [])
  const updatedUsers = users.map(u =>
    u.email === updatedUser.email ? { ...u, ...updatedUser } : u
  )
  writeStorage('users', updatedUsers)
  writeStorage('currentUser', updatedUser)
  return updatedUser
}

export function deleteUser(email) {
  const users = readStorage('users', [])
  writeStorage('users', users.filter(u => u.email !== email))
  localStorage.removeItem('currentUser')
}

export function logout() {
  localStorage.removeItem('currentUser')
}

export function initAuth() {
  return readStorage('currentUser', null)
}
