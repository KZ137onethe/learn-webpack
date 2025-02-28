import isPrime from './isPrime'

export default class NumberTimer {
  constructor(duration = 500) {
    this.duration = duration
    this.number = 1
    this.onNumberCreated = null
    this.timerId = null
  }

  start() {
    if(this.timerId) {
      return;
    }
    this.timerId = setInterval(() => {
      this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number))
      this.number++
    }, this.duration)
  }
  stop() {
    clearInterval(this.timerId)
    this.timerId = null
  }
}