import { css } from '~/styled-system/css'

const Input = ({ label }: { label?: string }) => {
  return (
    <div
      className={css({
        position: 'relative',
        width: 'clamp(100px, 100%, 200px)',
      })}
    >
      <input
        type="text"
        name="text"
        placeholder={label}
        className={
          'peer ' +
          css({
            padding: '10px',
            height: '40px',
            width: 'clamp(100px, 100%, 200px)',
            borderWidth: '2px',
            borderBlock: 'solid',
            borderColor: 'dark',
            borderTop: 'none',
            fontSize: '16px',
            background: 'transparent',
            outline: 'none',
            boxShadow: '7px 7px 0px 0px',
            boxShadowColor: 'dark',
            transition: 'all 0.5s',
            _focus: {
              boxShadow: 'none',
              transition: 'all 0.5s',
            },
          })
        }
      />
      {label && (
        <label
          className={css({
            position: 'absolute',
            top: '10px',
            left: '10px',
            color: 'dark',
            transition: 'all 0.5s',
            transform: 'scale(0)',
            zIndex: -1,
            _peerFocus: {
              top: '-10px',
              transform: 'scale(1)',
              transition: 'all 0.5s',
            },
          })}
        >
          {label}
        </label>
      )}
      <div
        className={css({
          position: 'absolute',
          content: '""',
          backgroundColor: 'dark',
          width: '100%',
          height: '2px',
          right: '0',
          top: '0',
          transition: 'all 0.5s',
          _peerFocus: {
            width: '35%',
            transition: 'all 0.5s',
          },
        })}
      ></div>
      <div
        className={css({
          position: 'absolute',
          content: '""',
          backgroundColor: 'dark',
          width: '0%',
          height: '2px',
          right: '0',
          bottom: '0',
          transition: 'all 0.5s',
          _peerFocus: {
            width: '100%',
            transition: 'all 0.5s',
          },
        })}
      ></div>
    </div>
  )
}

export default Input
