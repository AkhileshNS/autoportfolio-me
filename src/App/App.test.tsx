import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('should render a div', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBe(1);
  });
});
