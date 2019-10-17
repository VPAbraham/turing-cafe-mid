import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper
  const addReservation = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Form addReservation={addReservation} />
    )
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
    
  it('should set inputted text and date to state', () => {

  })

  it('should run addReservation on button click', () => {

  })
})
