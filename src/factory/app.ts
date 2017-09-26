import PizzaStore from './supers/PizzaStore'
import NYPizzaStore from './pizzaStores/NYPizzaStore'
import ChicagoPizzaStore from './pizzaStores/ChicagoPizzaStore'

const nyStore = new NYPizzaStore()
const chicagoStore = new ChicagoPizzaStore()

let pizza = nyStore.orderPizza(nyStore.menus.CHEEZE)
console.log(`イーサンの注文は${pizza.getName()}\n`)

pizza = chicagoStore.orderPizza(chicagoStore.menus.CHEEZE)
console.log(`ジョエルの注文は${pizza.getName()}`)