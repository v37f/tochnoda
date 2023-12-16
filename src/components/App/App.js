import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Minics from '../Minics/Minics';
import Instagram from '../Instagram/Instagram';
import videosData from '../../utils/videosData';
import {
  socialsData,
  questionsData,
  reviewsData,
  clientsData,
} from '../../utils/constants';
import Questions from '../Questions/Questions';
import Reviews from '../Reviews/Reviews';
import Clients from '../Clients/Clients';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';

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
        <Clients clientsData={clientsData} />
        <Contacts socialsData={socialsData} />
      </Main>
      <Footer socialsData={socialsData} />
    </div>
  );
}

export default App;
