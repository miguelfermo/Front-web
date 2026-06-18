import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SignInForm from './SignInForm'

const mockLogin = vi.fn()
const mockNavigate = vi.fn()

vi.mock('../hooks/useAuth', () => ({
  useAuth: () => ({ login: mockLogin }),
}))
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('SignInForm', () => {
  beforeEach(() => {
    mockLogin.mockReset()
    mockNavigate.mockReset()
  })

  it('renders login form', () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Entrar/i })).toBeInTheDocument()
  })

  it('shows error when fields are empty', async () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    )
    const form = screen.getByRole('button', { name: /Entrar/i }).closest('form')
    fireEvent.submit(form)
    expect(await screen.findByText(/Todos os campos são obrigatórios\./i)).toBeInTheDocument()
  })

  it('calls login and navigates on valid submit', async () => {
    mockLogin.mockImplementation(() => ({ name: 'Alice' }))
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: '1234' } })
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }))

    expect(mockLogin).toHaveBeenCalledWith({ name: 'Alice', password: '1234' })
    expect(mockNavigate).toHaveBeenCalledWith('/Donations')
  })

  it('shows auth error message on login failure', async () => {
    mockLogin.mockImplementation(() => { throw new Error('Senha incorreta.') })
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'wrong' } })
    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }))

    expect(await screen.findByText('Senha incorreta.')).toBeInTheDocument()
  })
})
