import createAnimationWrapper from '../createAnimationWrapper'

const flash = {
  '0%, 50%, 100%': { opacity: '1' },
  '25%, 75%': { opacity: '0' },
}

export default createAnimationWrapper(flash)
