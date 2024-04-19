import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/ReactQueryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Outlet, RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
      <Outlet />
    </QueryClientProvider>
  </React.StrictMode>
);
