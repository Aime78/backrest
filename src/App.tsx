import { Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import Home from './pages/HomePage/HomePage';
import WorkPage from './pages/WorkPage/WorkPage';
import appRoutes from './routes/routes';

function App() {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<Home />} />
      <Route path={appRoutes.WORK} element={<WorkPage />} />
      <Route path={appRoutes.ABOUT} element={<AboutUsPage />} />
    </Routes>
  );
}

export default App;
