import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
import UnAuthRoutes from './routes/UnAuthRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {AuthRoutes}
          {UnAuthRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;