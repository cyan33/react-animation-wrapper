import createAnimationWrapper from '../createAnimationWrapper'

const bounce = {
  '0%, 20%, 53%, 80%, 100%': {
    animationTimingFunction: 'cubic-bezier(.215,.61,.355,1)',
    transform: 'translateZ(0)',
  },
  '40%, 43%': {
    animationTimingFunction: 'cubic-bezier(.755,.05,.855,.06)',
    transform: 'translate3d(0,-30px,0)',
  },
  '70%': {
    animationTimingFunction: 'cubic-bezier(.755,.05,.855,.06)',
    transform: 'translate3d(0,-15px,0)',
  },
  '90%': {
    transform: 'translate3d(0, -4px, 0)',
  },
}

export default createAnimationWrapper(bounce)
