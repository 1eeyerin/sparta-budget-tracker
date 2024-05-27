import { createBrowserRouter } from 'react-router-dom';
import { Home, Detail } from '@/pages';
import { Container } from '@/components/Layout';

const router = createBrowserRouter(
  [
    {
      element: <Container />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/detail/:id',
          element: <Detail />,
        },
      ],
    },
  ],
  {
    basename: '/sparta-expense-manager/',
  },
);

export default router;
