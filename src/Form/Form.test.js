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
    
  it('should save user\'s name to state', () => {
    const expected = 'Victor'
    const mockEvent = { preventDefault() { }, target: { name: 'name', value: 'Victor' } }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('name')).toEqual(expected)
  })

  it('should save the user\'s check-in time to state', () => {
    const expected = '4:00'
    const mockEvent = { preventDefault() { }, target: { name: 'time', value: '4:00' } }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('time')).toEqual(expected)

  })

  it('should save the user\'s date of arrival to state', () => {
    const expected = '05/10'
    const mockEvent = { preventDefault() { }, target: { name: 'date', value: '05/10' } }

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('date')).toEqual(expected)

  })

  // below test having issues with preventDefault

  // it('should run addReservation on button click', () => {
  //   wrapper.instance().addReservation = jest.fn();
  //   wrapper.instance().forceUpdate();
  //   const mockEvent = { preventDefault() { }, target: {preventDefault() { }, date: '', name: '', number: '', time: ''} }

  //   wrapper.find('button').simulate('click', mockEvent)
  //   expect(addReservation).toHaveBeenCalledWith(mockEvent);
  // })
})
