import Pizza from '../..//supers/Pizza'

export default class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super()
    this.name = 'シカゴスタイルのソース＆野菜ピザ'
    this.dough = '厚いクラスト生地'
    this.sauce = 'マリナラソース'

    this.toppings.push('色々な野菜')
  }

  cut = (): void => {
    console.log('ピザを四角形に切り分ける')
  }
}