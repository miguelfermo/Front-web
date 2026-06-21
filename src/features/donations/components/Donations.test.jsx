import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Donations from './Donations'
import { DonationsProvider } from '@/context/DonationsContext'

const donations = [
  { id: 1, image: 'image1.png', title: 'Campanha A', time: '2h', location: 'São Paulo', desc: 'Descrição A', company: 'Empresa A', value: '1000' },
  { id: 2, image: 'image2.png', title: 'Campanha B', time: '5h', location: 'Rio', desc: 'Descrição B', company: 'Empresa B', value: '2000' },
]

vi.mock('@/context/DonationsContext', () => ({
  useDonations: () => ({ donations }),
  // eslint-disable-next-line react/prop-types
  DonationsProvider: ({ children }) => <>{children}</>,
}))

describe('Donations', () => {
  it('renders donation cards and opens modal on button click', async () => {
    render(
      <DonationsProvider>
        <Donations searchTerm="" companyTerm="" locationTerm="" />
      </DonationsProvider>
    )

    expect(screen.getByText('Campanha A')).toBeInTheDocument()
    expect(screen.getByText('Campanha B')).toBeInTheDocument()

    fireEvent.click(screen.getAllByText('Doar')[0])
    expect(await screen.findByText('Opções de Doação:')).toBeInTheDocument()
  })

  it('shows no results when list is filtered out', () => {
    render(
      <DonationsProvider>
        <Donations searchTerm="xyz" companyTerm="" locationTerm="" />
      </DonationsProvider>
    )

    expect(screen.getByText('Nenhum resultado encontrado.')).toBeInTheDocument()
  })
})
