import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

describe('Behavioral testing', () => {
  it('logs a user in and gets the entries', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );

    const email = screen.getByPlaceholderText(/email/i);
    userEvent.type(email, 'testing@user.com');

    const password = screen.getByPlaceholderText(/password/i);
    userEvent.type(password, 'secret');

    const signIn = screen.getByRole('button', {
      name: /sign in/i
    });
    userEvent.click(signIn);

    await screen.findByText(/hello/i);
    await screen.findByText(/testing/i);

    const text = screen.getByRole('textbox');
    userEvent.type(text, 'Another post');
  });

});