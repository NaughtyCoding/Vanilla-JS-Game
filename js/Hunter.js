export default class Hunter {
  position = window.innerWidth / 2
  speed = 0

  constructor() {
    this.el = this.render()
    this.setupMovement()
  }

  update() {
    this.position += this.speed
    this.el.style.left = this.position + 'px'
  }

  setupMovement() {
    document.body.addEventListener('keydown', event => {
      //if(['ArrowLeft', 'ArrowRight'].includes(event.key))
      if (event.key === 'ArrowLeft') {
        this.speed = -10
      } else if (event.key === 'ArrowRight') {
        this.speed = 10
      }
    })
    document.body.addEventListener('keyup', event => {
      if (event.key === 'ArrowLeft' || 'ArrowRight') {
        this.speed = 0
      }
    })
  }

  render() {
    const el = document.createElement('div')
    el.className = 'hunter'
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
