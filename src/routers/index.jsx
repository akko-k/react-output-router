import { createBrowserRouter } from 'react-router-dom';
import { TodoPage } from '../pages/todo';
import { TodoCraetePage } from '../pages/create';
import { TodoDetailPage } from '../pages/detail';
import { TodoEditPage } from '../pages/edit';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoPage />,
  },
  {
    path: '/create',
    element: <TodoCraetePage />,
  },
  {
    path: '/detail/:id',
    element: <TodoDetailPage />,
  },
  {
    path: '/edit/:id',
    element: <TodoEditPage />,
  },
]);
