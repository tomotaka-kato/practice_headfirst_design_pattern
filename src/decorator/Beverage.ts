abstract class Beverage {
  description = "不明な飲み物"

  getDescription = () => (
    this.description
  )

  abstract cost:() => number
}

export default Beverage