import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Guest from './components/Guest';
import { getAll } from './redux/appReducer';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import store from './redux/store';


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
//need redux form of fromik
const mapStateToProps = state => ({
  commonState: state.app.commonState
})

const AppContainer = connect(mapStateToProps, {getAll})(App)

const PizzaSliceApp = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
  )
}

export default PizzaSliceApp;
