import './App.css';
import Fireflies from './components/Fireflies/Fireflies';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UserNeed from './components/UserNeed/UserNeed';

function App() {

  return (
    <>
      <div className="background"></div>
      <Fireflies/>
      <div className="container">
        <Header/>
        <Home/>
        <UserNeed/>
      </div>
    </>
  )
};

export default App;
