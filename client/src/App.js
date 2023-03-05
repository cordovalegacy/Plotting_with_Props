import './App.css';
import Nav from './components/nav';
import Left from './components/left';
import Main from './components/main';
import Sub from './components/sub';
import Advertisement from './components/advertisement';

function App() {
  return (
    <div className="App">
      <Nav />
      <Left />
      <Main>
        <Sub />
        <Sub />
        <Sub />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
