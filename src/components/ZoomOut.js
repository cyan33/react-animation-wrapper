import createAnimationWrapper from '../createAnimationWrapper'

const zoomOut = {
  '0%': { opacity: '1' },
  '50%': {
    opacity: '0',
    transform: 'scale3d(.3, .3, .3)',
  },
  '100%': { opacity: '0' },
}

export default createAnimationWrapper(zoomOut)
