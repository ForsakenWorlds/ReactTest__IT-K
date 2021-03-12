import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messangers from './components/Messangers/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wraper">
        <Header />
        <div className="flexBox">
          <Navbar />
          <div className="content">
            <Route path="/profile" component={Profile} />
            <Route exact path="/messangers" component={Messangers} />
            {/* <Profile />
            <Messangers /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
