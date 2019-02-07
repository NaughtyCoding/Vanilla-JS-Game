import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'

export default class Game {
  entities = []
  loopCounter = 0

  constructor() {
    this.createCounter()
    this.createHunter()
    this.loop()
  }

  createCounter() {
    this.counter = new Counter()
  }

  createHunter() {
    this.hunter = new Hunter()
    this.entities = [...this.entities, this.hunter]
  }

  addBird() {
    const config = {
      onRemove: this.removeBird,
      onClick: this.updatePlayerPoints,
      onEscape: this.updateBirdsPoints,
    }

    this.entities = [...this.entities, new Bird(config)]
  }

  removeBird = bird => {
    const index = this.entities.indexOf(bird)
    this.entities = [
      ...this.entities.slice(0, index),
      ...this.entities.slice(index + 1),
    ]
    this.counter.addBirdsPoint()
  }

  updatePlayerPoints = () => {
    this.counter.addPlayerPoint()
  }

  updateBirdsPoint = () => {
    this.counter.addBirdsPoint()
  }

  loop() {
    this.loopCounter++ % 60 === 0 && this.addBird()
    this.entities.forEach(entity => entity.update())
    requestAnimationFrame(() => this.loop())
  }
}
