import './App.css';
import Navbar from './components/Navbar';
import UsersContainer from './components/pages/users/UsersContainer';
import News from './components/pages/news/News';
import Login from './components/login/Login';
import {Routes, Route} from 'react-router-dom';
import HeaderContainer from './components/HeaderContainer';
import React, {Suspense} from 'react';
import {connect} from 'react-redux';
import {initializeApp} from './redux/appReducer';
import Preloader from './components/common/Preloader';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from "./redux/reduxStore"


const DialogsContainer = React.lazy(() => import('./components/pages/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/pages/profile/ProfileContainer'))


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (
        <div className="app-wrapper">
          <HeaderContainer/>
          <Navbar/>
          <div className="content-wrapper">
            <Suspense fallback={<Preloader/>}>
              <Routes>
                <Route path='/profile' element={<ProfileContainer/>}>
                  <Route path=':user_id' element={<ProfileContainer/>} />
                </Route>
                <Route path='/dialogs/*' element={<DialogsContainer/>}>
                </Route>
                <Route path='/users/*' element={<UsersContainer/>}/>
                <Route path='/news/*' element={<News/>}/>
                <Route path='/login/*' element={<Login/>}/>
              </Routes>
            </Suspense>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, {initializeApp})(App)

const SocialNetworkApp = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
  )
}

export default SocialNetworkApp