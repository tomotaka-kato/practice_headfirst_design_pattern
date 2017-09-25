import CondimentDecorator from '../CondimentDecortor'
import Beverage from '../Beverage'

class Mocha extends CondimentDecorator {
  beverage: Beverage

  constructor(b: Beverage) { super(); this.beverage = b }

  getDescription = () => `${this.beverage.getDescription()}、モカ`

  cost = () => .20 + this.beverage.cost()
}

export default Mocha