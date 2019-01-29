import React from 'react';
import { shallow } from 'enzyme';
import SurveyTable from './SurveyTable';

describe('<SurveyTable />', () => {
  test('renders', () => {
    const wrapper = shallow(<SurveyTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
