import Link from '../SocialLink/Link'
import './navbar.scss'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="wrapper">
      <div className="logo">
            <img src='/logo.png' width= "70%" />
        </div>
        <Link />
      </div>
    </nav>
  )
}

export default Navbar
