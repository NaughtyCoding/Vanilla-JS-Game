export default class Counter {
  constructor() {
    this.playersPoints = 0
    this.birdsPoints = 0
    this.el = this.render()
    this.update()
  }

  addPlayerPoint() {
    this.playersPoints += 1
    this.update()
  }

  addBirdsPoint() {
    this.birdsPoints += 1
    this.update()
  }

  update() {
    this.el.innerHTML = this.playersPoints + ':' + this.birdsPoints //aktualisiert den Text IM HTML-Element
  }

  render() {
    const el = document.createElement('div')
    el.className = 'counter'
    document.body.insertAdjacentElement('afterbegin', el)
    return el
  }
}
