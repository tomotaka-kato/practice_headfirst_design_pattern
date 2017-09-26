import Pizza from './Pizza'
export default abstract class PizzaStore {

  abstract menus: { [key: string]: string }

  orderPizza = (type: string): Pizza => {
    const pizza = this.createPizza(type)

    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza;
  }

  protected abstract createPizza(type: string): Pizza
}