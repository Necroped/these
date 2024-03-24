import { css } from '~/styled-system/css'
import Fireworks, { FireworksHandlers } from '@fireworks-js/react'
import { useRef } from 'react'
const Button = ({ children, props }: any) => {
  const ref = useRef<FireworksHandlers>(null)

  const toggle = () => {
    if (!ref.current) return
    if (ref.current.isRunning) {
      ref.current.stop()
    } else {
      ref.current.start()
    }
  }

  return (
    <button
      className={css({
        fontFamily: 'body',
        alignItems: 'center',
        backgroundColor: 'secondary',
        borderWidth: '2px',
        borderColor: 'dark',
        rounded: '8px',
        boxSizing: 'border-box',
        color: 'dark',
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
          bgColor: 'dark',
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
      {...props}
      onClick={toggle}
    >
      <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        autostart={false}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
        }}
      />
      {children}
    </button>
  )
}

export default Button
