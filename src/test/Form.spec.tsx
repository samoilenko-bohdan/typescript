import React from 'react';
import { shallow } from 'enzyme'
import { Form } from '../components/form';

const onGetWeather = jest.fn();

describe('Form container', () => {

    describe('Form container initial', () => {

        const formContainer = shallow(<Form onGetWeather={onGetWeather} />);

        it('render initial', () => {
            expect(formContainer.find('form')).toHaveLength(1);
        });

    });

    describe('Form submit', () => {

        const formContainer = shallow(<Form onGetWeather={onGetWeather} />);

        beforeEach(() => {
            formContainer.find('form').simulate('submit', {})
        });

        it('dispatches the `onGetWeather()` method it receives from props', () => {
            expect(onGetWeather).toHaveBeenCalledTimes(1);
        })

    })

});
