import Link from '../SocialLink/Link'
import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />     
      <div className="wrapper">
        <span>Bhagyadeep</span>
        <div className="social">
          <Link />
        </div>
      </div>
    </div>
  )
}

export default Navbar
