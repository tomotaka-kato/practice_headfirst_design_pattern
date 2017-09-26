import Pizza from '../../supers/Pizza'

export default class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super()
    this.name = 'シカゴスタイルのソース＆チーズピザ'
    this.dough = '厚いクラスト生地'
    this.sauce = 'マリナラソース'

    this.toppings.push('粉レッジャーノチーズ')
  }

  cut = (): void => {
    console.log('ピザを四角形に切り分ける')
  }
}