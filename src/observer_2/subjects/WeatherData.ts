import { Subject, } from '../interface'

export class WeatherData implements Subject {
  functions: ( (t: number, h: number, p: number) => void )[]
  temperature: number
  humidity: number
  pressure: number

  constructor() {
    this.functions = []
  }

  public registerObserver = (f: (t: number, h: number, p: number) => void ): void => { this.functions.push(f) }

  public removeObserver = (f: (t: number, h: number, p: number) => void ): void => {
    const i: number = this.functions.indexOf(f)
    if(i >= 0) this.functions.splice(i, 1)
  }

  public notifyObservers = (): void => {
    this.functions.forEach(f => {
      f(this.temperature, this.humidity, this.pressure)
    });
  }

  public measurementsChanged = (): void => {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature
    this.humidity = humidity
    this.pressure = pressure
    this.measurementsChanged()
  }
}