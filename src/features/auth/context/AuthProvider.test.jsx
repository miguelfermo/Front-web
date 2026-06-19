import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AuthProvider } from './AuthProvider'
import { useAuth } from '../hooks/useAuth'

vi.mock('../services/authService', () => ({
  login: vi.fn(() => ({ name: 'Alice', email: 'alice@example.com' })),
  register: vi.fn(() => ({ name: 'Bob', email: 'bob@example.com' })),
  logout: vi.fn(),
  updateUser: vi.fn((user) => user),
  deleteUser: vi.fn(),
  initAuth: vi.fn(() => null),
}))

const TestConsumer = () => {
  const { user, loading, login, register, logout, updateUser, deleteUser } = useAuth()

  return (
    <div>
      <div>{loading ? 'loading' : 'ready'}</div>
      <div>{user?.name || 'no-user'}</div>
      <button onClick={() => login({ name: 'Alice', password: '1234' })}>login</button>
      <button onClick={() => register({ name: 'Bob', email: 'bob@example.com', password: '1234' })}>register</button>
      <button onClick={() => logout()}>logout</button>
      <button onClick={() => updateUser({ name: 'Alice Updated', email: 'alice@example.com' })}>update</button>
      <button onClick={() => deleteUser('alice@example.com')}>delete</button>
    </div>
  )
}

describe('AuthProvider', () => {
  it('initializes ready state and no user', async () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>
    )

    expect(await screen.findByText('ready')).toBeInTheDocument()
    expect(screen.getByText('no-user')).toBeInTheDocument()
  })

  it('updates user state after login and logout', async () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: /login/i }))
    expect(await screen.findByText('Alice')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /logout/i }))
    expect(await screen.findByText('no-user')).toBeInTheDocument()
  })

  it('updates user state after register and update', async () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: /register/i }))
    expect(await screen.findByText('Bob')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /update/i }))
    expect(await screen.findByText('Alice Updated')).toBeInTheDocument()
  })

  it('clears user state after delete', async () => {
    render(
      <AuthProvider>
        <TestConsumer />
      </AuthProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: /login/i }))
    expect(await screen.findByText('Alice')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /delete/i }))
    expect(await screen.findByText('no-user')).toBeInTheDocument()
  })
})
