import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/ReactQueryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Outlet, RouterProvider } from 'react-router-dom';
import { router } from './router';

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
      <Outlet />
    </QueryClientProvider>
  );
};
