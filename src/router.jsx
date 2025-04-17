import { createBrowserRouter } from 'react-router-dom';
import CarDetails from './pages/CarDetails';
import NotFoundPage from './pages/NotFound';
import RootLayout from './layouts/rootLayout';
import { ErrorBoundary } from './ErrorBoundary';
import CarsList from './components/lists/CarsList';

// We can use loader flow, but I decided to use react query for caching and more flexibility

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <CarsList />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: 'car/:registrationnumber',
        element: <CarDetails />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
