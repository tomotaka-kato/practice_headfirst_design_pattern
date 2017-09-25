"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherData {
    constructor() {
        this.registerObserver = (o) => { this.observers.push(o); };
        this.removeObserver = (o) => {
            const i = this.observers.indexOf(o);
            if (i >= 0)
                this.observers.splice(i, 1);
        };
        this.notifyObservers = () => {
            this.observers.forEach(observer => {
                observer.update(this.temperature, this.humidity, this.pressure);
            });
        };
        this.measurementsChanged = () => {
            this.notifyObservers();
        };
        this.observers = [];
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
exports.WeatherData = WeatherData;
