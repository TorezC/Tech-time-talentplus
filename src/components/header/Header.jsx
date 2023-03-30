import './header.css';
import techtime from '../../assets/techtime.svg'

const Header = () => {
  return (
    <div className='header'>
        <img src={techtime} alt="logo" />
        <ul className='nav-links'>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Testimonial</li>
            <li>Community</li>
            <li>Enroll Now</li>
        </ul>
    </div>
  )
}

export default Header