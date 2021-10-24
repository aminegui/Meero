import { render, screen } from '@testing-library/react';
import { StartPoint } from './StartPoint.component';

describe('rendering test', () => {
  const text = {
    name: 'Amine',
    action: 'run',
  };
  it('check if the component render correctly', () => {
    render(<StartPoint text={text} />);
    const componentDisplayTest = screen.getByTestId('componentTestId');
    expect(componentDisplayTest).toBeInTheDocument();
  });
});
