import createAnimationWrapper from '../createAnimationWrapper'

const flip = {
  '0%': {
    transform: 'perspective(400px) rotateY(-1turn)',
    animationTimingFunction: 'ease-out',
  },
  '40%': {
    transform: 'perspective(400px) translateZ(150px) rotateY(-190deg)',
    animationTimingFunction: 'ease-out',
  },
  '50%': {
    transform: 'perspective(400px) translateZ(150px) rotateY(-170deg)',
    animationTimingFunction: 'ease-in',
  },
  '80%': {
    transform: 'perspective(400px) scale3d(.95,.95,.95)',
    animationTimingFunction: 'ease-in',
  },
  '100%': {
    transform: 'perspective(400px)',
    animationTimingFunction: 'ease-in',
  },
}

export default createAnimationWrapper(flip)
