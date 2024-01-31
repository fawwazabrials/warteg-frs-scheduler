import { useEffect } from 'react';
import PickedMatakuliahProvider from './context/PickedMatakuliahContext';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    document.title = 'Warteg ITB FRS Scheduler';
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    }
  ]);

  return (
    <PickedMatakuliahProvider>
      <RouterProvider router={router} />
    </PickedMatakuliahProvider>
  );
};

export default App;
