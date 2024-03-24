import { useState } from 'react'
import { ArrowRightIcon } from 'lucide-react'
import { useAuthentication } from '~/context/authentication_context'
import { css } from '~/styled-system/css'

const Login = () => {
  const [email, setEmail] = useState('')
  const { login } = useAuthentication()
  return (
    <>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="Votre email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <button
        className={css({
          alignItems: 'center',
          bgColor: '#fee6e3',
          borderWidth: '2px',
          borderColor: '#111',
          rounded: '8px',
          boxSizing: 'border-box',
          color: '#111',
          cursor: 'pointer',
          display: 'flex',
          fontSize: '16px',
          h: '48px',
          justifyContent: 'center',
          lineHeight: '24px',
          maxW: '100%',
          pl: '25px',
          pr: '25px',
          pt: 0,
          pb: 0,
          pos: 'relative',
          textAlign: 'center',
          textDecorationLine: 'none',
          userSelect: 'none',
          _after: {
            content: "''",
            bgColor: '#111',
            rounded: '8px',
            display: 'block',
            h: '48px',
            left: 0,
            w: '100%',
            pos: 'absolute',
            top: '-2px',
            translate: '8px 8px',
            transition: 'translate',
            transitionTimingFunction: 'ease-in-out',
            transitionDelay: 'slow',
            transitionDuration: '0.2s',
            zIndex: -1,
          },
          _hover: {
            outline: 0,
            _after: {
              translate: '0 0',
            },
          },
        })}
      >
        Continuer
        <ArrowRightIcon />
      </button>
    </>
  )
}

export default Login
