import { CurrentConditionsDisplay } from './displays/CurrentConditionsDisplay';
import { WeatherData } from './subjects/WeatherData'

const weatherData = new WeatherData()

const currentDisplay = new CurrentConditionsDisplay(weatherData)
// 他のディプレイ

weatherData.setMeasurements(27, 65, 30.4)
weatherData.setMeasurements(28, 70, 29.2)
weatherData.setMeasurements(26, 90, 29.2)
