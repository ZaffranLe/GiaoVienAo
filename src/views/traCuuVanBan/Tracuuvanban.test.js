import React from 'react';
import { shallow } from 'enzyme';
import TraCuuVanBan from './Tracuuvanban';

describe('<TraCuuVanBan />', () => {
  test('renders', () => {
    const wrapper = shallow(<TraCuuVanBan />);
    expect(wrapper).toMatchSnapshot();
  });
});
