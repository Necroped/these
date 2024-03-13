import { useAuthentication } from '../context/authentication_context'

const Logout = () => {
  const { logout, user } = useAuthentication()
  return (
    <>
      Connecté en tant que {user?.email}
      <button type="button" onClick={logout}>
        Se déconnecter
      </button>
    </>
  )
}

export default Logout
