import Beverage from '../Beverage'
class HouseBlend extends Beverage {

  constructor() { super(); this.description = 'ハウスブレンドコーヒー'}

  cost = (): number => .89
}

export default HouseBlend