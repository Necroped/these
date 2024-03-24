import { ReactNode } from 'react'
import { css } from '~/styled-system/css'

enum Theme {
  'light',
  'dark',
}

const Container = ({
  children,
  theme,
  props,
}: {
  children: ReactNode
  theme: keyof typeof Theme
  props?: any
}) => {
  return (
    <div data-theme={theme} {...props}>
      <div
        className={css({ backgroundColor: 'primary' })}
        style={{ transform: 'translateZ(-1px)' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Container
