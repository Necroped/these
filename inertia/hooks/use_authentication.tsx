import Guest from '../../app/models/guest'

interface Options<T = undefined> {
  onSuccess?: (user?: T) => void
  onFail?: () => void
}

const loginUrl = '/login'
const logoutUrl = '/logout'

const login = async (email: string, options?: Options<Guest>) => {
  const response = await fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({ email }),
  })
  const { user, isSuccess } = await response.json()
  if (isSuccess) {
    options?.onSuccess?.(user)
  } else {
    options?.onFail?.()
  }
}

const logout = async (options?: Options) => {
  const response = await fetch(logoutUrl, { method: 'POST' })
  const { isSuccess } = await response.json()
  if (isSuccess) {
    options?.onSuccess?.()
  } else {
    options?.onFail?.()
  }
}

export const useAuthentication = () => ({
  login,
  logout,
})
