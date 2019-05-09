import React from 'react';
import { shallow } from 'enzyme'
import {App} from '../App';

describe('News container', () => { // групируем с помощью describe все тесты для контейнера News
  const store: any = { // создаем свойства
    getState: () => {},
  }

  describe('News container initial', () => {
    const newsContainer = shallow(<App store={store} />)

    it('render initial', () => {
      expect(newsContainer.find('div')).toHaveLength(6)// .find + поиск по тэгу
    })

  })
})