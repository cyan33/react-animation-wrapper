import createAnimationWrapper from '../createAnimationWrapper'

const bounceIn = {
  '0%, 20%, 40%, 60%, 80%, 100%': { animationTimingFunction: 'cubic-bezier(.215,.61,.355,1)' },
  '0%': { opacity: '0', transform: 'scale3d(.3, .3, .3)' },
  '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
  '40%': { transform: 'scale3d(.9,.9,.9)' },
  '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
  '80%': { transform: 'scale3d(.97, .97, .97)' },
  '100%': { opacity: '1', transform: 'scaleX(1)' },
}

export default createAnimationWrapper(bounceIn)
