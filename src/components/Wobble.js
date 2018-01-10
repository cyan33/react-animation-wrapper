import createAnimationWrapper from '../createAnimationWrapper'

const wobble = {
  '0%': { transform: 'none' },
  '15%': { transform: 'translate3d(-15%,0,0) rotate(-5deg)' },
  '30%': { transform: 'translate3d(15%,0,0) rotate(3deg)' },
  '45%': { transform: 'translate3d(-10%,0,0) rotate(-3deg)' },
  '60%': { transform: 'translate3d(10%,0,0) rotate(2deg)' },
  '75%': { transform: 'translate3d(-5%,0,0) rotate(-1deg)' },
  '100%': { transform: 'none' },
}

export default createAnimationWrapper(wobble)
