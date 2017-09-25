"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CurrentConditionsDisplay_1 = require("./displays/CurrentConditionsDisplay");
const WeatherData_1 = require("./subjects/WeatherData");
const weatherData = new WeatherData_1.WeatherData();
const currentDisplay = new CurrentConditionsDisplay_1.CurrentConditionsDisplay(weatherData);
// 他のディプレイ
weatherData.setMeasurements(27, 65, 30.4);
weatherData.setMeasurements(28, 70, 29.2);
weatherData.setMeasurements(26, 90, 29.2);
