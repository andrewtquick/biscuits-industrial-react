import '../css/navbar.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Clock from '../content/Clock';


const Navbar = () => {
  const [ navbar, getNavbar] = useState([]);
  useEffect(() => {
    const fetchShips = async () => {
      const apiRes = 'First fetch done'
      try {
        const res = await axios.get('http://localhost:8081/api/navbar');
        getNavbar(res.data);
        console.log(res)
      } catch (error) {
        console.log(error);
      } finally {
          console.log(apiRes)
      }
    }
    fetchShips();
  },[])
    return (
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars"></i>
        </button>
          <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Ship Manufacturing</a>
            </li>
            <ul className="navbar-nav  flex-wrap me-auto">
          {navbar.map(navbar=>(
                <div className='Navbar'>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">{navbar.FactionName}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a className="dropdown-item">Ship Class
                </a>
                <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <a className="dropdown-item">Ship Type</a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a className="dropdown-item" href="#">Ship Name</a>
                      </li>
                    </ul>
                  </li>
                </ul>

              </li>
            </ul>
          </li>
            </div>
                ))}
        </ul>
          </ul>
        </div>
        <div class="navbar-text">
        <Clock />
      </div>
        </div>
    )
}
export default Navbar;