import React from 'react';
import { shallow } from 'enzyme'
import Title from '../components/title';

describe('Title container', () => {
    describe('Title container initial', () => {
      const titleContainer = shallow(<Title />);
  
      it('render initial', () => {
        expect(titleContainer.find('div')).toHaveLength(1);
      })
  
    })
  });
