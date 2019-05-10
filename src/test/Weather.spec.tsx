import React from 'react';
import {shallow} from 'enzyme'
import {Weather} from '../components/weather';

interface IProps {
    store: any;
}

const store: IProps = {store: {}};

describe('Weather container', () => {
    describe('Weather container initial', () => {
        const newsContainer = shallow(<Weather store={store}/>);

        it('render initial', () => {
            expect(newsContainer.find('div')).toHaveLength(1);
        })
    })
});
