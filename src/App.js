import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import Routers from './routers/Routers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routers>
          <Route />
        </Routers>
      </BrowserRouter>
    </div>
  );
}

export default App;
