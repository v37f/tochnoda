import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Minics from '../Minics/Minics';
import videosData from '../../utils/videosData';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <About />
        <Minics videosData={videosData} />
      </Main>
    </div>
  );
}

export default App;
