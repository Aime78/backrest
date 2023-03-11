import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import WorkPage from './pages/WorkPage/WorkPage';
import appRoutes from './routes/routes';

function App() {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<Home />} />
      <Route path={appRoutes.WORK} element={<WorkPage />} />
    </Routes>
  );
}

export default App;
