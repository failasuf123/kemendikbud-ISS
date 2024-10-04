// Page.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Page from '@/app/mahasiswa/page'; // Adjust the import path according to your file structure
import LoadingAnimation from '@/components/LoadingAnimation';


jest.mock('@/components/LoadingAnimation', () => () => <div>Loading...</div>);

describe('Page Component', () => {
  const push = jest.fn();

  beforeEach(() => {
    // Mock the implementation of useRouter
    (useRouter as jest.Mock).mockReturnValue({ push });
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('renders the component correctly', () => {
    render(<Page />);

    expect(screen.getByText(/Hallo Failasuf Indi Marsendy/i)).toBeInTheDocument();
    expect(screen.getByText(/Sudah siap berpartisipasi dalam survey?/i)).toBeInTheDocument();
    expect(screen.getByText(/Mulai Survey/i)).toBeInTheDocument();
  });

  it('displays loading animation when starting the survey', async () => {
    render(<Page />);

    const startSurveyButton = screen.getByText(/Mulai Survey/i);
    
    // Click the start survey button
    fireEvent.click(startSurveyButton);

    // Expect loading animation to be displayed
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    
    // Wait for navigation to occur after 500ms
    await waitFor(() => expect(push).toHaveBeenCalledWith('/mahasiswa/12Ansa82'), { timeout: 600 });
  });
});