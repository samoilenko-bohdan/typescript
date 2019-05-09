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
}

interface IError {
    error: string;
}

export const reducer = (state = {}, action: IAction) => {
    if (action.type === "SET_WEATHER") {
        return {
            "Location: ": action.data.cityName,
            "Temperature: ":  action.data.temp + " ℃",
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
        var error: IError = {error: ""};
        error.error = "The city is not found. Please enter the values or change city name";
        return error;
    } else {
        return state;
    }
}