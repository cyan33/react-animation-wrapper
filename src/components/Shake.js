import createAnimationWrapper from '../createAnimationWrapper'

const shake = {
  '0%, 50%, 100%': { transform: 'translateX(0)' },
  '25%': { transform: 'translateX(-10px)' },
  '75%': { transform: 'translateX(10px)' },
}

export default createAnimationWrapper(shake, {
  duration: '0.2s',
  iterationCount: '4',
})
