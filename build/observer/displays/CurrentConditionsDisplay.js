"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.update = (temperature, humidity, pressure) => {
            this.temperature = temperature;
            this.humidity = humidity;
            this.display();
        };
        this.display = () => {
            console.log(`現在の気象状況；
      温度${this.temperature}度
      湿度${this.humidity}%`);
        };
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
}
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
