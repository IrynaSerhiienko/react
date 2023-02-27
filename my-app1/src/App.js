import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './componets/Header/Header';
import Nav from './componets/Nav/Nav';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import Settings from './componets/Settings/Settings';
import Fetch from './componets/Fetch/Fetch';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          {/* <Route exact path="/" element={<Profile />} /> */}
          <Route
            path="/profile"
            element={<Profile state={props.state.profilePage} />}
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={props.state.dialogsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/fetch" element={<Fetch />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
