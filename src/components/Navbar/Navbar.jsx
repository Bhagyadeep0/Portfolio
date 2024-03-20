import Sidebar from '../Sidebar/Sidebar'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />     
      <div className="wrapper">
        <span>Bhagyadeep</span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="instagram" /></a>
          <a href="#"><img src="/twitter.png" alt="twitter" /></a>
          <a href="#"><img src="/behance.png" alt="behance" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
