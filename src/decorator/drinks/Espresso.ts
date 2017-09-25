import Beverage from '../Beverage'
class Espresso extends Beverage {

  constructor() { super(); this.description = 'エスプレッソ'}

  cost = (): number => 1.99
}

export default Espresso