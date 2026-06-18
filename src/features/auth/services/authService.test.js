import { describe, expect, it, beforeEach } from 'vitest'
import * as authService from './authService'

const userA = { name: 'Alice', email: 'alice@example.com', password: '1234' }
const userB = { name: 'Bob', email: 'bob@example.com', password: 'abcd' }

describe('features/auth/services/authService', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('users', JSON.stringify([userA, userB]))
  })

  it('logs in an existing user with correct password', () => {
    expect(authService.login({ name: 'Alice', password: '1234' })).toEqual(userA)
    expect(JSON.parse(localStorage.getItem('currentUser'))).toEqual(userA)
  })

  it('throws when user is not found', () => {
    expect(() => authService.login({ name: 'Carlos', password: 'x' })).toThrow('Usuário não encontrado.')
  })

  it('throws when password is incorrect', () => {
    expect(() => authService.login({ name: 'Alice', password: 'wrong' })).toThrow('Senha incorreta.')
  })

  it('registers a new user and stores currentUser', () => {
    const newUser = { name: 'Carlos', email: 'carlos@example.com', password: 'pass' }
    expect(authService.register(newUser)).toEqual(newUser)
    expect(JSON.parse(localStorage.getItem('currentUser'))).toEqual(newUser)
    expect(JSON.parse(localStorage.getItem('users'))).toContainEqual(newUser)
  })

  it('throws when registering with duplicate email', () => {
    expect(() => authService.register({ name: 'Alice', email: 'alice@example.com', password: '1234' })).toThrow('Usuário já cadastrado.')
  })

  it('updates existing user and currentUser', () => {
    const updatedUser = { ...userA, name: 'Alice Updated' }
    expect(authService.updateUser(updatedUser)).toEqual(updatedUser)
    expect(JSON.parse(localStorage.getItem('currentUser'))).toEqual(updatedUser)
    expect(JSON.parse(localStorage.getItem('users'))).toContainEqual(updatedUser)
  })

  it('deletes a user and removes currentUser', () => {
    localStorage.setItem('currentUser', JSON.stringify(userA))
    authService.deleteUser('alice@example.com')
    expect(JSON.parse(localStorage.getItem('users'))).not.toContainEqual(userA)
    expect(localStorage.getItem('currentUser')).toBeNull()
  })

  it('logs out and removes currentUser', () => {
    localStorage.setItem('currentUser', JSON.stringify(userB))
    authService.logout()
    expect(localStorage.getItem('currentUser')).toBeNull()
  })

  it('initializes auth from localStorage', () => {
    localStorage.setItem('currentUser', JSON.stringify(userB))
    expect(authService.initAuth()).toEqual(userB)
  })
})
