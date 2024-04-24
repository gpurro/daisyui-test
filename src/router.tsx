import { PageLoading } from '@ui/utils/PageLoading';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './features/demo/pages/HomePage';
import { PokemonPage } from './features/pokemon/pages/PokemonPage';
import { PokemonsPage } from './features/pokemon/pages/PokemonsPage';

/* Code split theme page */
const ThemePage = lazy(
  async () => await import('./features/demo/pages/ThemePage')
);

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <div>Error</div>
    },
    {
      path: '/pokemon',
      element: <PokemonsPage />
    },
    {
      path: '/pokemon/:name',
      element: <PokemonPage />
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
