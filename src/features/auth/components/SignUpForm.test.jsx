import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SignUpForm from './SignUpForm'

const mockRegister = vi.fn()
const mockNavigate = vi.fn()

vi.mock('../hooks/useAuth', () => ({
  useAuth: () => ({ register: mockRegister }),
}))
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

describe('SignUpForm', () => {
  beforeEach(() => {
    mockRegister.mockReset()
    mockNavigate.mockReset()
  })

  it('renders signup form', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    )
    expect(screen.getByPlaceholderText('Nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Senha')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument()
  })

  it('shows error when fields are empty', async () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    )
    const form = screen.getByRole('button', { name: /Cadastrar/i }).closest('form')
    fireEvent.submit(form)
    expect(await screen.findByText(/Todos os campos são obrigatórios\./i)).toBeInTheDocument()
  })

  it('calls register and navigates on valid submit', async () => {
    mockRegister.mockImplementation(() => ({ name: 'Carlos' }))
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Carlos' } })
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'carlos@example.com' } })
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: 'pass' } })
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }))

    expect(mockRegister).toHaveBeenCalledWith({ name: 'Carlos', email: 'carlos@example.com', password: 'pass' })
    expect(mockNavigate).toHaveBeenCalledWith('/Donations')
  })

  it('shows auth error message on register failure', async () => {
    mockRegister.mockImplementation(() => { throw new Error('Usuário já cadastrado.') })
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Nome'), { target: { value: 'Alice' } })
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'alice@example.com' } })
    fireEvent.change(screen.getByPlaceholderText('Senha'), { target: { value: '1234' } })
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }))

    expect(await screen.findByText('Usuário já cadastrado.')).toBeInTheDocument()
  })
})
