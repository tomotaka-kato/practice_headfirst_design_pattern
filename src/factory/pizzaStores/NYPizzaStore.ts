import PizzaStore from '../supers/PizzaStore'
import Pizza from '../supers/Pizza'
import NYStyleCheezePizza from '../pizzas/NYStyle/NYStyleCheesePizza'
import NYStyleVeggiePizza from '../pizzas/NYStyle/NYStyleVeggiePizza'

export default class NYPizzaStore extends PizzaStore {

  menus = {
    CHEEZE: 'チーズ',
    VEGIE: '野菜'
  }
  createPizza(item: string): Pizza {
    if (item === this.menus.CHEEZE) return new NYStyleCheezePizza()
    else if (item === this.menus.VEGIE) return new NYStyleVeggiePizza()
    else return null
  }
}