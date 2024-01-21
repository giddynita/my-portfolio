import { myself } from '../data'

let myselfIndex = 0
let characterIndex = 0

const updateText = () => {
  const textAnimation = () => {
    characterIndex++
    if (characterIndex === myself[myselfIndex].length) {
      myselfIndex++
      characterIndex = 0
    }
    if (myselfIndex === myself.length) {
      myselfIndex = 0
    }
    const animatedText = `I am ${
      myself[myselfIndex].slice(0, 1) === 'F' ? 'a' : ''
    } ${myself[myselfIndex].slice(0, characterIndex)}`
  }
  setTimeout(textAnimation, 400)

  return { animatedText }
}

export default updateText
