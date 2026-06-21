import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Search from './Search'

const mockOnSearchChange = vi.fn()

vi.mock('@/features/auth/hooks/useAuth', () => ({
  useAuth: () => ({ user: { name: 'Alice' } }),
}))

describe('Search', () => {
  beforeEach(() => {
    mockOnSearchChange.mockReset()
  })

  it('renders inputs and button when user is authenticated', () => {
    render(
      <MemoryRouter>
        <Search onSearchChange={mockOnSearchChange} />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText('Pesquise sua vaquinha')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Pesquise por companhia')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Pesquisa por local')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Criar nova doação/i })).toBeInTheDocument()
  })

  it('calls onSearchChange when typing inputs', () => {
    render(
      <MemoryRouter>
        <Search onSearchChange={mockOnSearchChange} />
      </MemoryRouter>
    )

    fireEvent.change(screen.getByPlaceholderText('Pesquise sua vaquinha'), {
      target: { value: 'campanha' },
    })
    expect(mockOnSearchChange).toHaveBeenCalled()
  })

  it('clears field when close icon is clicked', () => {
    render(
      <MemoryRouter>
        <Search onSearchChange={mockOnSearchChange} />
      </MemoryRouter>
    )

    const searchInput = screen.getByPlaceholderText('Pesquise sua vaquinha')
    fireEvent.change(searchInput, { target: { value: 'campanha' } })
    expect(searchInput.value).toBe('campanha')

    fireEvent.click(screen.getByTestId('search-close'))
    expect(mockOnSearchChange).toHaveBeenCalledWith(
      expect.objectContaining({ searchTerm: '' })
    )
  })
})
