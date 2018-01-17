import createAnimationWrapper from '../createAnimationWrapper'

const tada = {
  '0%': { transform: 'scaleX(1)' },
  '10%, 20%': { transform: 'scale3d(.9,.9,.9) rotate(-3deg)' },
  '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1,1.1,1.1) rotate(3deg)' },
  '40%, 60%, 80%': { transform: 'scale3d(1.1,1.1,1.1) rotate(-3deg)' },
  '100%': { transform: 'scaleX(1)' },
}

export default createAnimationWrapper(tada)
