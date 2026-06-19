import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from '../hooks/useAuth'

export default function RequireAuth({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? children : <Navigate to="/login" replace />
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
}
