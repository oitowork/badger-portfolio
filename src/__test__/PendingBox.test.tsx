import React from 'react';
import PendingBox from '../components/PendingBox';
import '@testing-library/jest-dom';
import { cleanup, screen, render } from '@testing-library/react';

afterEach(cleanup);
describe('Pending component', () => {
  it('should have a pending text', () => {
    render(<PendingBox />);
    expect(screen.getByText(/Pending/)).toBeInTheDocument();
  });

  it('should have a button with content', async () => {
    render(<PendingBox />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons).toHaveLength(1);
    expect(screen.getByText(/^claim/i)).toBeInTheDocument();
  });
});
