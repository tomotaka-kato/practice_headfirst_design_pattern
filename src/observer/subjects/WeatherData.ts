import { Subject, Observer } from '../interface'

export class WeatherData implements Subject {
  observers: Observer[]
  temperature: number
  humidity: number
  pressure: number

  constructor() {
    this.observers = []
  }

  public registerObserver = (o: Observer): void => { this.observers.push(o) }

  public removeObserver = (o: Observer): void => {
    const i: number = this.observers.indexOf(o)
    if(i >= 0) this.observers.splice(i, 1)
  }

  public notifyObservers = (): void => {
    this.observers.forEach(observer => {
      observer.update(this.temperature, this.humidity, this.pressure)
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