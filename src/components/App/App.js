import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <About />
      </Main>
    </div>
  );
}

export default App;
