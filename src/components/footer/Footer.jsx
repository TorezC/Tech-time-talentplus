import './footer.css'
import techtime from '../../assets/techtime.svg'
import fb from '../../assets/fb.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import discord from '../../assets/discord.svg'
import twitter from '../../assets/twitter.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="tech-footer">
        <img src={techtime} alt="logo" width={72} />
        <p>Reach out to us on any of our social media networks</p>       
        <div className="socials">
          <img src={fb} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
          <img src={instagram} alt="instagram" />
          <img src={discord} alt="discord" />
        </div>
      </div>
      <div className="links">
        <p>Useful Links</p>
        <div>
            <div>Home</div>
            <div>About Us</div>
            <div>Our Courses</div>
            <div>Testimonials</div>
            <div>Our Community</div>
        </div>
      </div>
      <div className="links">
      <p>Community</p>
        <div>
            <div>Help Centers</div>
            <div>Partners</div>
            <div>Suggestion</div>
            <div>Blog</div>
            <div>Newsletter</div>
        </div>
      </div>
      <div className="links">
      <p>Subscribe Us</p>
        <span>
          <input type="text" placeholder='nft123@gmail.com'/>
          <button>Send Message</button>
        </span>
      </div>
    </div>
  )
}

export default Footer