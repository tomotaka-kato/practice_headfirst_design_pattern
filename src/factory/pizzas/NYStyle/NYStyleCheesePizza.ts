import Pizza from '../..//supers/Pizza'

export default class NYStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'ニューヨークスタイルのソース＆チーズピザ'
    this.dough = '薄いクラスト生地'
    this.sauce = 'マリナラソース'

    this.toppings.push('粉レッジャーノチーズ')
  }
}