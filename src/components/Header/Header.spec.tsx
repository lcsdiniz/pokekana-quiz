import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from '.';
import '@testing-library/jest-dom';

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <Header />
    )
  
    expect(screen.getByText('PokéKana Quiz')).toBeInTheDocument()
  })

  it('opens HelpModal', () => {
    render(
      <Header />
    )

    const helpModalButton = screen.getAllByTestId("header-button")[0];
    fireEvent.click(helpModalButton)
    expect(screen.getByText('Instructions:')).toBeInTheDocument()
  })

  it('opens ConfigModal', () => {
    render(
      <Header />
    )

    const helpModalButton = screen.getAllByTestId("header-button")[1];
    fireEvent.click(helpModalButton)
    expect(screen.getByText('Hard Mode')).toBeInTheDocument()
    expect(screen.getByText('Comments')).toBeInTheDocument()
  })
})