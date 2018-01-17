import createAnimationWrapper from '../createAnimationWrapper'

const fadeIn = {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
}

export default createAnimationWrapper(fadeIn, { duration: '2s' })
