import createAnimationWrapper from '../createAnimationWrapper'

const pulse = {
  '0%, 100%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.05)' },
}

export default createAnimationWrapper(pulse)
