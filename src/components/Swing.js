import createAnimationWrapper from '../createAnimationWrapper'

const swing = {
  '20%': { transform: 'rotate(10deg)' },
  '40%': { transform: 'rotate(-10deg)' },
  '60%': { transform: 'rotate(5deg)' },
  '80%': { transform: 'rotate(-5deg)' },
  '100%': { transform: 'rotate(00deg)' },
}

export default createAnimationWrapper(swing)
