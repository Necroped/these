import { ReactNode } from 'react'
import { css } from '~/styled-system/css'

const FormContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={css({
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px',
      })}
    >
      {children}
    </div>
  )
}

export default FormContainer
