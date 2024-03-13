import { DefaultAuthProvider, DefaultAuthenticatePayload } from 'adminjs'

import componentLoader from './component_loader.js'
import env from '#start/env'

/**
 * Your "authenticate" function. Depending on the auth provider used, the payload may be different.
 *
 * The default authentication provider uses email and password to authenticate. You can modify this
 * function to use email & password to verify if the User exists and if their passwords match.
 *
 * The default implementation below will let any in, so make sure to update it.
 */
const authenticate = async ({ email, password }: DefaultAuthenticatePayload) => {
  if (email === env.get('ADMINJS_USERNAME') && password === env.get('ADMINJS_USERNAME')) {
    return Promise.resolve({ email })
  }
  return null
}

const authProvider = new DefaultAuthProvider({
  componentLoader,
  authenticate,
})

export default authProvider
