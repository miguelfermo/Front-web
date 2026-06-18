import AuthLayout from '../components/AuthLayout'

const LoginPage = () => {
  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}
    >
      <AuthLayout />
    </div>
  )
}

export default LoginPage
