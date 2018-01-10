import createAnimationWrapper from '../createAnimationWrapper'

const bounceIn = {
  '0%': { transform: 'scale(0.1)', opacity: 0 },
  '60%': { transform: 'scale(1.2)', opacity: 1 },
  '100%': { transform: 'scale(1)' },
}

export default createAnimationWrapper(bounceIn)
