import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper
  it('should match the snapshot', () => {
    wrapper = shallow(<Card 
      id={2}
      name='Victor'
      date='06/03'
      time='4:00'
      number={1}
      key={2}
    />)
  })

  expect(wrapper).toMatchSnapshot()
  
})