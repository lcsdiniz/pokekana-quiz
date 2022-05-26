import { render, screen } from '@testing-library/react';
import { Input } from '.';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('renders correctly', () => {
    render(
      <Input placeholder="Who is that Pokémon?" />
    )
  
    expect(screen.getByPlaceholderText('Who is that Pokémon?')).toBeInTheDocument()
  })
})