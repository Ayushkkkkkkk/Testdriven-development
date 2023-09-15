import { render, screen } from '@testing-library/react';
import App from './App';

import Enzymes , {shallow} from "enzyme"

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("addition" , ()=>{
  const wrapper = shallow(<App/>)
})
