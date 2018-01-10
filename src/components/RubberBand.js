import createAnimationWrapper from '../createAnimationWrapper'

const rubberBand = {
  '0%, 100%': { transform: 'scaleX(1)' },
  '30%': { transform: 'scale(1.25, .75)' },
  '40%': { transform: 'scale(.75, 1.25)' },
  '50%': { transform: 'scale(1.15, .85)' },
  '65%': { transform: 'scale(.95, 1.05)' },
  '75%': { transform: 'scale(1.05, .95)' },
}

export default createAnimationWrapper(rubberBand)
