import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Guest from './components/Guest';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Container />} />
        <Route path="/:guest_name" element={<Guest />} />
      </Routes>
    </div>
  );
}

export default App;
