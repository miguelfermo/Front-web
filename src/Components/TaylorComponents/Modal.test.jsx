import React from 'react'
import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

const campaign = {
  title: 'Campanha Teste',
  image: 'image.png',
  location: 'São Paulo',
  desc: 'Descrição teste',
  company: 'Empresa Teste',
  value: '5000',
}

describe('Modal', () => {
  it('renders campaign details and closes when button clicked', () => {
    const onClose = vi.fn()
    render(<Modal campaign={campaign} onClose={onClose} />)

    expect(screen.getByText('Campanha Teste')).toBeInTheDocument()
    expect(screen.getByText(/Localização:/i)).toBeInTheDocument()
    expect(screen.getByText(/Descrição:/i)).toBeInTheDocument()
    expect(screen.getByText(/Companhia:/i)).toBeInTheDocument()
    expect(screen.getByText(/Meta de Doação:/i)).toBeInTheDocument()

    fireEvent.click(screen.getByText('Fechar'))
    expect(onClose).toHaveBeenCalled()
  })
})
