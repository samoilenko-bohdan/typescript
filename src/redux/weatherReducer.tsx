interface IData {
    cityName: string;
    temp: string;
    minTemp: string;
    maxTemp: string;
    clouds: string;
    windSpeed: string;
    pressure: string;
    humidity: string;
    description: string;
}

interface IAction {
    type: string;
    data: IData;
    message: string;
}

export const weatherReducer = (state = {}, action: IAction) => {
    if (action.type === "SET_WEATHER") {
        return {
            "Location: ": action.data.cityName,
            "Temperature: ": action.data.temp + " ℃",
            "Minimum temperature: ": action.data.minTemp + " ℃",
            "Maximum temperature: ": action.data.maxTemp + " ℃",
            "Clouds: ": action.data.clouds + " %",
            "Wind speed: ": action.data.windSpeed + " m/s",
            "Pressure: ": action.data.pressure + " hpa",
            "Humidity: ": action.data.humidity + " %",
            "Description: ": action.data.description,
            error: undefined
        }
    } else if (action.type === "SET_ERROR") {
        return {error: action.message};
    } else {
        return state;
    }
};