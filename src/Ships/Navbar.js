import { Link } from 'react-router-dom';
import '../css/navbar.css'

const Navbar = () => {
    return (
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarLeftAlignExample" aria-controls="navbarLeftAlignExample" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
          <div class="collapse navbar-collapse" id="navbarLeftAlignExample">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Ship Manufacturing</a>
            </li>
            <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">Faction Name
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <a class="dropdown-item">Ship Class
                </a>
                <ul class="dropdown-menu dropdown-submenu">
                  <li>
                    <a class="dropdown-item">Ship Type</a>
                    <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="#">Ship Name</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
          </ul>
        </div>
        </div>
    )
}
export default Navbar;