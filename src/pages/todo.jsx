import { TodoTemplate } from '../components/templates/TodoTemplate';
import { TodoProvider } from '../contexts/TodoContext';

export const TodoPage = () => (
  <TodoProvider>
    <TodoTemplate />;
  </TodoProvider>
);
