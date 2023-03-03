import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import appRoutes from './routes/routes';

function App() {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<Home />} />
    </Routes>
  );
}

export default App;
