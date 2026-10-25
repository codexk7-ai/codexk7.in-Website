import { QueryClient } from '@tanstack/react-query';
import { createMemoryHistory, createRouter, RouterProvider } from '@tanstack/react-router';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { routeTree } from '@/routeTree.gen';

function renderAt(path: string) {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    history: createMemoryHistory({ initialEntries: [path] }),
  });
  return render(<RouterProvider router={router} />);
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('App routing', () => {
  it('renders the home hero headline', async () => {
    renderAt('/');
    expect(await screen.findByRole('heading', { level: 1, name: /We Build/i })).toBeInTheDocument();
  });

  it('exposes a skip link to the main content', async () => {
    renderAt('/');
    await screen.findByRole('heading', { level: 1 });
    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#main-content');
    expect(document.getElementById('main-content')).not.toBeNull();
  });

  it('renders the not-found page for unknown routes', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    renderAt('/this-route-does-not-exist');
    expect(await screen.findByText('Page not found')).toBeInTheDocument();
  });
});
