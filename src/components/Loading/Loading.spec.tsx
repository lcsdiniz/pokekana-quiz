import { render, screen } from '@testing-library/react';
import { Loading } from '.';
import '@testing-library/jest-dom';

describe('Loading component', () => {
  it('renders correctly', () => {
    render(
      <Loading />
    )
  
    expect(screen.getByText('Loading')).toBeInTheDocument()
  })
})