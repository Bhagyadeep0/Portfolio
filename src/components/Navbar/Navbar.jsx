import Link from '../SocialLink/Link'
import './navbar.scss'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className="logo">
            <img src='/logo.png' width= "70%" />
        </div>
        <Link />
    </nav>
  )
}

export default Navbar
