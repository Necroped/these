import { useState } from 'react'
import { css } from '~/styled-system/css'

const Checkbox = ({ label }: { label?: string }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const toggleChecked = () => {
    console.log('toggle')
    setIsChecked((i) => !i)
  }
  return (
    <div
      className={css({
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'flex',
      })}
      onClick={toggleChecked}
    >
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={console.log}
        className={
          'peer ' +
          css({
            display: 'none',
          })
        }
      />
      <label
        className={css({
          height: '25px',
          width: '25px',
          bgColor: 'transparent',
          border: 'calc(25px * 0.1) solid #000',
          rounded: '8px',
          position: 'relative',
          display: 'inline-block',
          boxSizing: 'border-box',
          transition: 'border-color',
          transitionTimingFunction: 'ease',
          transitionDuration: '.2s',
          cursor: 'pointer',
          _before: {
            boxSizing: 'border-box',
            position: 'absolute',
            height: 0,
            width: 'calc(25px * 0.2)',
            bgColor: 'secondary',
            display: 'inline-block',
            transformOrigin: 'left top',
            borderRadius: '5px',
            content: '" "',
            transition: 'opacity',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.5s',
            ////////////////////////
            top: 'calc(25px * 0.72)',
            left: 'calc(25px * 0.41)',
            transform: 'rotate(-135deg)',
          },
          _after: {
            boxSizing: 'border-box',
            position: 'absolute',
            height: 0,
            width: 'calc(25px * 0.2)',
            bgColor: 'secondary',
            display: 'inline-block',
            transformOrigin: 'left top',
            rounded: '8px',
            content: '" "',
            transition: 'opacity',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.5s',
            ////////////////////////
            top: 'calc(25px * 0.37)',
            left: 'calc(25px * 0.05)',
            transform: 'rotate(-45deg)',
          },
          _peerChecked: {
            borderColor: 'dark',
            _after: {
              height: 'calc(25px / 2)',
              animation: 'checkbox_after 0.2s ease 0s forwards',
            },
            _before: {
              height: 'calc(25px * 1.2)',
              animation: 'checkbox_before 0.4s ease 0s forwards',
            },
          },
        })}
      />
      {label && (
        <div
          className={css({
            marginLeft: '5px',
          })}
        >
          {label}
        </div>
      )}
    </div>
  )
}

export default Checkbox

/**
 *
 * <div class="checkbox-wrapper-19">
  <input type="checkbox" id="cbtest-19" />
  <label for="cbtest-19" class="check-box">
</div>

<style>
  .checkbox-wrapper-19 {
    box-sizing: border-box;
    --background-color: #fff;
    --checkbox-height: 25px;
  }

  @-moz-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @-webkit-keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothabottomcheck-19 {
    0% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) / 2);
    }
  }

  @keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-webkit-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  @-moz-keyframes dothatopcheck-19 {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: calc(var(--checkbox-height) * 1.2);
    }
  }

  .checkbox-wrapper-19 input[type=checkbox] {
    display: none;
  }

  .checkbox-wrapper-19 .check-box {
    height: var(--checkbox-height);
    width: var(--checkbox-height);
    background-color: transparent;
    border: calc(var(--checkbox-height) * .1) solid #000;
    border-radius: 5px;
    position: relative;
    display: inline-block;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-transition: border-color ease 0.2s;
    -o-transition: border-color ease 0.2s;
    -webkit-transition: border-color ease 0.2s;
    transition: border-color ease 0.2s;
    cursor: pointer;
  }
  .checkbox-wrapper-19 .check-box::before,
  .checkbox-wrapper-19 .check-box::after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: calc(var(--checkbox-height) * .2);
    background-color: secondary;
    display: inline-block;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    border-radius: 5px;
    content: " ";
    -webkit-transition: opacity ease 0.5;
    -moz-transition: opacity ease 0.5;
    transition: opacity ease 0.5;
  }
  .checkbox-wrapper-19 .check-box::before {
    top: calc(var(--checkbox-height) * .72);
    left: calc(var(--checkbox-height) * .41);
    box-shadow: 0 0 0 calc(var(--checkbox-height) * .05) var(--background-color);
    -moz-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
  .checkbox-wrapper-19 .check-box::after {
    top: calc(var(--checkbox-height) * .37);
    left: calc(var(--checkbox-height) * .05);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box,
  .checkbox-wrapper-19 .check-box.checked {
    border-color: secondary;
  }
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::after,
  .checkbox-wrapper-19 .check-box.checked::after {
    height: calc(var(--checkbox-height) / 2);
    -moz-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -o-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    -webkit-animation: dothabottomcheck-19 0.2s ease 0s forwards;
    animation: dothabottomcheck-19 0.2s ease 0s forwards;
  }
  .checkbox-wrapper-19 input[type=checkbox]:checked + .check-box::before,
  .checkbox-wrapper-19 .check-box.checked::before {
    height: calc(var(--checkbox-height) * 1.2);
    -moz-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -o-animation: dothatopcheck-19 0.4s ease 0s forwards;
    -webkit-animation: dothatopcheck-19 0.4s ease 0s forwards;
    animation: dothatopcheck-19 0.4s ease 0s forwards;
  }
</style>

 */
