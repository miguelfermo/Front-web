import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'
import { loadUserDonations } from '@/features/donations/services/userDonationStorage'

const campaign = {
  id: 1,
  title: 'Campanha Teste',
  image: '',
  location: 'São Paulo',
  desc: 'Descrição teste',
  company: 'Empresa Teste',
  value: '5000',
}

vi.mock('@/features/auth/hooks/useAuth', () => ({
  useAuth: () => ({ user: { name: 'Teste', email: 'teste@email.com' } }),
}))

describe('Modal', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('renders campaign details and closes when button clicked', () => {
    const onClose = vi.fn()
    render(<Modal campaign={campaign} onClose={onClose} />)

    expect(screen.getByText('Campanha Teste')).toBeInTheDocument()
    expect(screen.getByText(/Localização:/i)).toBeInTheDocument()
    expect(screen.getByText(/Descrição:/i)).toBeInTheDocument()
    expect(screen.getByText(/Companhia:/i)).toBeInTheDocument()
    expect(screen.getByText(/Meta de Doação:/i)).toBeInTheDocument()
    expect(screen.getByText('Opções de Doação:')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Fechar'))
    expect(onClose).toHaveBeenCalled()
  })

  it('saves donation locally when option is selected and Doar is clicked', () => {
    const onClose = vi.fn()
    render(<Modal campaign={campaign} onClose={onClose} />)

    fireEvent.click(screen.getByText('Doação em dinheiro'))
    fireEvent.click(screen.getByRole('button', { name: 'Doar' }))

    const saved = loadUserDonations()
    expect(saved).toHaveLength(1)
    expect(saved[0]).toMatchObject({
      campaignId: 1,
      campaignTitle: 'Campanha Teste',
      type: 'cash',
      typeLabel: 'Doação em dinheiro',
      userEmail: 'teste@email.com',
      userName: 'Teste',
    })
    expect(onClose).toHaveBeenCalled()
  })
})
