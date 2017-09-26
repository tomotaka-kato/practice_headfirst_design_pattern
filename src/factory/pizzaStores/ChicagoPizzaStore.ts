import PizzaStore from '../supers/PizzaStore'
import Pizza from '../supers/Pizza'
import ChicagoStyleCheezePizza from '../pizzas/ChicagoStyle/ChicagoStyleCheezePizza'
import ChicagoStyleVeggiePizza from '../pizzas/ChicagoStyle/ChicagoStyleVeggiePizza'

export default class NYPizzaStore extends PizzaStore {

  menus = {
    CHEEZE: 'チーズ',
    VEGIE: '野菜'
  }
  createPizza(item: string): Pizza {
    if (item === 'チーズ') return new ChicagoStyleCheezePizza()
    else if (item === '野菜') return new ChicagoStyleVeggiePizza()
    else return null
  }
}