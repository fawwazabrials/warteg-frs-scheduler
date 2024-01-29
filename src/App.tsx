import { useEffect } from 'react';
import PickedMatakuliahProvider from './context/PickedMatakuliahContext';
import Home from './pages/Home';

const App = () => {
  useEffect(() => {
    document.title = 'Warteg ITB FRS Scheduler';
  }, []);

  return (
    <PickedMatakuliahProvider>
      <Home />
    </PickedMatakuliahProvider>
  );
};

export default App;
