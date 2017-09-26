export default abstract class Pizza {
  name: string
  dough: string
  sauce: string
  toppings: string[] = []

  prepare = (): void => {
    console.log(`${this.name}を下処理`)
    console.log(`生地をこねる…`)
    console.log(`ソースを追加…`)
    console.log(`トッピングを追加:`)
    this.toppings.forEach(topping => console.log(` ${topping}`))
  }

  bake = (): void => {
    console.log("350度で25分間焼く")
  }

  cut = (): void => {
    console.log('ピザを扇型に切り分ける')
  }

  box = (): void => {
    console.log('PizzaStoreの正式な箱にピザを入れる')
  }

  getName = (): string => this.name
}