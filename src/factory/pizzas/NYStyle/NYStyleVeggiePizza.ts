import Pizza from '../..//supers/Pizza'

export default class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super()
    this.name = 'ニューヨークスタイルのソース＆野菜ピザ'
    this.dough = '薄いクラスト生地'
    this.sauce = 'マリナラソース'

    this.toppings.push('色々な野菜')
  }
}