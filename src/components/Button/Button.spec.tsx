import { render, screen } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders correctly as "next"', () => {
    render(
      <Button
        onClick={() => {}}
        placeholder="Next"
        type="next"
      />
    )
  
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('renders correctly as "submit"', () => {
    render(
      <Button
        onClick={() => {}}
        placeholder="Submit"
        type="submit"
      />
    )
  
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})