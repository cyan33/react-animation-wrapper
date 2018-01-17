import createAnimationWrapper from '../createAnimationWrapper'

const rollIn = {
  '0%': {
    opacity: '0',
    transform: 'translate3d(-100%, 0, 0) rotate(-120deg)',
  },
  '100%': {
    opacity: '1',
    transform: 'none',
  },
}

export default createAnimationWrapper(rollIn)
