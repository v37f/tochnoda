import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Minics from '../Minics/Minics';
import Instagram from '../Instagram/Instagram';
import videosData from '../../utils/videosData';
import { socialsData, questionsData, reviewsData } from '../../utils/constants';
import Questions from '../Questions/Questions';
import Reviews from '../Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <About />
        <Minics videosData={videosData} socialsData={socialsData} />
        <Instagram socialsData={socialsData} />
        <Questions questionsData={questionsData} />
        <Reviews reviewsData={reviewsData} />
      </Main>
    </div>
  );
}

export default App;
