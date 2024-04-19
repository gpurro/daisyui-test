import { PageLoading } from '@ui/utils/PageLoading';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';

/* Code split theme page */
const ThemePage = lazy(async () => await import('./pages/Theme/ThemePage'));

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <div>Error</div>
    },
    {
      path: '/theme',
      element: (
        <Suspense fallback={<PageLoading />}>
          <ThemePage />
        </Suspense>
      )
    }
  ],
  { basename: `${import.meta.env.BASE_URL}` }
);
