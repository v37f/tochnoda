import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Minics from '../Minics/Minics';
import Instagram from '../Instagram/Instagram';
import videosData from '../../utils/videosData';
import { socialsData } from '../../utils/constants';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <About />
        <Minics videosData={videosData} socialsData={socialsData} />
        <Instagram />
      </Main>
    </div>
  );
}

export default App;
