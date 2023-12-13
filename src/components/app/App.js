import './../../style/reset.scss'
import './../../style/style.scss'

import { Routes, Route, useLocation } from 'react-router-dom'
import MainPage from '../../pages/mainPage/MainPage';
import AboutUs from '../../pages/aboutUs/AboutUs';
import Authorization from '../../pages/authorization/Authorization';
import AddInfo from '../../pages/addInfo/AddInfo';
import Login from '../../pages/login/Login';
import Profile from '../../pages/profile/Profile';

function App() {

  const location = useLocation();

  return (
    <div className="App">

      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/auth' element={<Authorization />} />
        <Route path='/additional' element={<AddInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>


      {/* <Switch>
        <Route exact path='/' Component={MainPage} />
        <Route exact path='/about' Component={AboutUs} />
      </Switch> */}
      {/* <MainPage /> */}
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;
