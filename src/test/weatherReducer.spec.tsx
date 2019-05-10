import {weatherReducer} from '../redux/weatherReducer';
import * as t from '../redux/weatherActionTypes';


interface IAction {
    type: string;
    message: string;
    data: any;
}

describe('weather reducer', () => {

    it('SET_ERROR', () => {
        const action: IAction = {
            type: t.SET_ERROR,
            message: "error",
            data: {}
        };

        expect(weatherReducer({}, action)).toEqual({
            error: "error",
        })
    })



});