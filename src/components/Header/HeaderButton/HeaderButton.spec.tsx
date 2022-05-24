import { render, screen } from '@testing-library/react';
import { HeaderButton } from '.';
import '@testing-library/jest-dom';

describe('HeaderButton component', () => {
  it('renders correctly', () => {
    render(
      <HeaderButton handleClick={() => {}}>
        <span>?</span>
      </HeaderButton>
    )
  
    expect(screen.getByText('?')).toBeInTheDocument()
  })
})