import { useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { useAuthentication } from '~/context/authentication_context'
import { Stack } from '~/styled-system/jsx'
import { Input } from '~/components/ui/input'
import { FormLabel } from '~/components/ui/form-label'
import { Button } from '~/components/ui/button'

const Login = () => {
  const [email, setEmail] = useState('')
  const { login } = useAuthentication()
  return (
    <>
      <Stack gap="1.5" width="2xs">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          placeholder="Votre email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </Stack>
      <Button disabled={!email.length} onClick={() => login(email)} variant={'solid'}>
        Continuer
        <ArrowRightIcon />
      </Button>
    </>
  )
}

export default Login
