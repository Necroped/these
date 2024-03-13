import { useAuthentication } from '../context/authentication_context'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const { login } = useAuthentication()
  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        placeholder="Entrer votre email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="button" disabled={!email.length} onClick={() => login(email)}>
        Se connecter
      </button>
    </>
  )
}

export default Login
