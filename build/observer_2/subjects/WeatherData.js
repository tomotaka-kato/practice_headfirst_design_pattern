"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherData {
    constructor() {
        this.registerObserver = (f) => { this.functions.push(f); };
        this.removeObserver = (f) => {
            const i = this.functions.indexOf(f);
            if (i >= 0)
                this.functions.splice(i, 1);
        };
        this.notifyObservers = () => {
            this.functions.forEach(f => {
                f(this.temperature, this.humidity, this.pressure);
            });
        };
        this.measurementsChanged = () => {
            this.notifyObservers();
        };
        this.functions = [];
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
exports.WeatherData = WeatherData;
