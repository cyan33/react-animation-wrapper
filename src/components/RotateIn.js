import createAnimationWrapper from '../createAnimationWrapper'

const rotateIn = {
  '0%': {
    transformOrigin: 'center',
    transform: 'rotate(-200deg)',
    opacity: '0',
  },
  '100%': {
    transformOrigin: 'center',
    transform: 'none',
    opacity: '1',
  },
}

export default createAnimationWrapper(rotateIn)
