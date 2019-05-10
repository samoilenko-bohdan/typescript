import React from 'react';
import { shallow } from 'enzyme';
import {App} from '../App';

describe('App container', () => {

  describe('App container initial', () => {
    const titleContainer = shallow(<App />);

    it('render initial', () => {
      expect(titleContainer.find('div')).toHaveLength(6)
    })

  })
});