const duplicateHtml = (element, quantity) => {
const content = element.innerHTML
const newContent = new Array(quantity).fill(content).join('')
element.innerHTML = newContent
}


const wavePath = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wavePath)
wavePath.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
