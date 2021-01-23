import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavItems from './NavItems'
import NavItem from './NavItem/NavItem'

configure({adapter: new Adapter()});

describe('<NavItems />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavItems />);
    });

    it('1. should render two <NavItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    });
    it('2. should render three <NavItem /> elements if authenticated', () => {
        wrapper.setProps({isAuth: true})
        expect(wrapper.find(NavItem)).toHaveLength(3);
    });
    it('3. should render Logout <NavItem />  if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.contains(<NavItem link='/logout'>Logout</NavItem>))
    });
});