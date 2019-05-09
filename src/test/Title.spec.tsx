import React from 'react';
import { shallow } from 'enzyme'
import Title from '../components/title';

describe('Title container', () => { // групируем с помощью describe все тесты для контейнера News  
    describe('Title container initial', () => {
      const newsContainer = shallow(<Title />)
  
      it('render initial', () => {
        expect(newsContainer.find('div')).toHaveLength(1)// .find + поиск по тэгу
      })
  
    })
  })
