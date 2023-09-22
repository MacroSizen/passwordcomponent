import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import PasswordComponent from '../components/passwordComponent';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('PasswordComponent', () => {
  it('renders without crashing', () => {
    shallow(<PasswordComponent options={['specialChar', 'number', 'uppercase', 'noConsecutiveLetters']} />);
  });

  it('renders the title text', () => {
    const wrapper = shallow(<PasswordComponent options={['specialChar', 'number', 'uppercase', 'noConsecutiveLetters']} />);
    const titleText = wrapper.find('#titleText');
    expect(titleText).toHaveLength(1);
  });

  it('renders the input element', () => {
    const wrapper = shallow(<PasswordComponent options={['specialChar', 'number', 'uppercase', 'noConsecutiveLetters']} />);
    const inputElement = wrapper.find('input');
    expect(inputElement).toHaveLength(1);
  });

});
