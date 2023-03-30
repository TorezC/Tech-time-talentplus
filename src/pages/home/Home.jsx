import './home.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import zoom from '../../assets/zoom.svg';
import stripe from '../../assets/stripe.svg';
import monday from '../../assets/monday.svg';
import slack from '../../assets/slack.svg';
import dropbox from '../../assets/dropbox.svg';

const Home = () => {
  return (
    <div>
      <div className="header-content">
          <Header/>
          <div className="grow">
            <div className="grow-content">
              <div className="grow-dot">

              </div>
              <div className="grow-content">
                <p className='grow-words'>Grow your skills to advance your career path </p>
              </div>
            </div>
            <div className="grow-image">
            </div>
          </div>
      </div>
      <div className="social-connect">
        <div className="connect">
          <img src={zoom} alt="zoom" />
          <img src={stripe} alt="stripe" />
          <img src={monday} alt="monday" />
          <img src={slack} alt="slack" />
          <img src={dropbox} alt="dropbox" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home