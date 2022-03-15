import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Guest from './components/Guest';

function App(props) {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Container {...props} />} />
        <Route path="/:guestIdx" element={<Guest {...props} />} />
      </Routes>
    </div>
  );
}

export default App;
