import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messangers from './components/Messangers/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wraper">
        <Header />
        <div className="flexBox">
          <Navbar />
          <div className="content">
            <Route path="/profile"
              render={() => <Profile postsData={props.postsData} />} />

            <Route exact path="/messangers"
              render={() => <Messangers usersData={props.usersData} messangersData={props.messangersData} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
