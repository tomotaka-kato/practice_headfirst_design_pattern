import { DisplayElement, Subject } from '../interface'

export class CurrentConditionsDisplay implements DisplayElement {
  temperature: number
  humidity: number
  weatherData: Subject

  constructor(weatherData: Subject) {
    this.weatherData = weatherData
    weatherData.registerObserver(this.update);
  }

  public update = (temperature: number, humidity: number, pressure: number):void => {
    this.temperature = temperature
    this.humidity = humidity
    this.display()
  }

  public display = (): void => {
    console.log(
      `現在の気象状況；
      温度${this.temperature}度
      湿度${this.humidity}%`
    )
  }
}