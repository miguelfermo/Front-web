import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import RequireAuth from './RequireAuth'

const mockUseAuth = vi.fn()
vi.mock('../hooks/useAuth', () => ({
  useAuth: () => mockUseAuth(),
}))

describe('RequireAuth', () => {
  it('renders children when user is authenticated', () => {
    mockUseAuth.mockReturnValue({ user: { name: 'User' }, loading: false })

    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route
            path="/private"
            element={
              <RequireAuth>
                <div>Private Content</div>
              </RequireAuth>
            }
          />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Private Content')).toBeInTheDocument()
  })

  it('redirects to login when user is not authenticated', () => {
    mockUseAuth.mockReturnValue({ user: null, loading: false })

    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route
            path="/private"
            element={
              <RequireAuth>
                <div>Private Content</div>
              </RequireAuth>
            }
          />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Login Page')).toBeInTheDocument()
  })

  it('renders nothing while loading', () => {
    mockUseAuth.mockReturnValue({ user: null, loading: true })

    render(
      <MemoryRouter initialEntries={['/private']}>
        <Routes>
          <Route
            path="/private"
            element={
              <RequireAuth>
                <div>Private Content</div>
              </RequireAuth>
            }
          />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.queryByText('Private Content')).not.toBeInTheDocument()
  })
})
