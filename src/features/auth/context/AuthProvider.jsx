import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as authService from '../services/authService'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = authService.initAuth()
    if (savedUser) setUser(savedUser)
    setLoading(false)
  }, [])

  const login = (creds) => {
    const loggedUser = authService.login(creds)
    setUser(loggedUser)
    return loggedUser
  }

  const register = (creds) => {
    const newUser = authService.register(creds)
    setUser(newUser)
    return newUser
  }

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  const updateUser = (userData) => {
    const updated = authService.updateUser(userData)
    setUser(updated)
    return updated
  }

  const deleteUser = (email) => {
    authService.deleteUser(email)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUser, deleteUser, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useAuth = () => useContext(AuthContext)
