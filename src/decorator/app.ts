import Beverage from './Beverage'
import Espresso from './drinks/Espresso'
import HouseBlend from './drinks/HouseBlend'
import Mocha from './condiments/Mocha'

const beverage: Beverage = new Espresso()
console.log(`${beverage.getDescription()} $${beverage.cost()}`)

let beverage2: Beverage = new HouseBlend()
beverage2 = new Mocha(beverage2)
beverage2 = new Mocha(beverage2)

console.log(`${beverage2.getDescription()} $${beverage2.cost()}`)