import * as t from './weatherActionTypes'

export const SET_WEATHER = (data: any) => ({ type: t.SET_WEATHER, data: data });
export const SET_ERROR = () => (
    {
        type: t.SET_ERROR,
        message: "The city is not found. Please enter the values or change city name"
    }
);