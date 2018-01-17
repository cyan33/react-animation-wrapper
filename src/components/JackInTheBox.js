import createAnimationWrapper from '../createAnimationWrapper'

const jackInTheBox = {
  '0%': {
    opacity: '0',
    transform: 'scale(.1) rotate(30deg)',
    transformOrigin: 'center bottom',
  },
  '50%': { transform: 'rotate(-10deg)' },
  '70%': { transform: 'rotate(3deg)' },
  '100%': {
    opacity: '1',
    transform: 'scale(1)',
  },
}

export default createAnimationWrapper(jackInTheBox)
