import { useAuthentication as useAuth } from '../hooks/use_authentication'
import { FC, createContext, useContext, useState } from 'react'
import Guest from '../../app/models/guest'

interface ContextType {
  user: Guest
  login: (_email: string) => void
  logout: () => void
}

const AuthenticationContext = createContext({} as ContextType)

export const useAuthentication = () => useContext(AuthenticationContext)
export const AuthenticationContextProvider: FC<{
  children: (isAuth: boolean) => JSX.Element
  user: Guest
}> = ({ children, user }) => {
  const [connectedUser, setConnectedUser] = useState<Guest | undefined>(user)
  const { login, logout } = useAuth()
  return (
    <AuthenticationContext.Provider
      value={{
        user: connectedUser,
        login: (_email: string) => {
          login(_email, {
            onSuccess: async (u) => {
              if (u) {
                setConnectedUser(u)
              }
            },
          })
        },
        logout: () =>
          logout({
            onSuccess: () => setConnectedUser(undefined),
          }),
      }}
    >
      {children(!!connectedUser?.email)}
    </AuthenticationContext.Provider>
  )
}
