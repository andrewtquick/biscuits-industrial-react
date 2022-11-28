import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home Page</Link>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/ships">Ship Manufacturing <i className="fas fa-sync"></i></Link>
                    <Link className="nav-link disabled">Citadel Manufacturing <i className="fas fa-times"></i></Link>
                    <Link className="nav-link disabled">Reprocessing <i className="fas fa-times"></i></Link>
                    <Link className="nav-link disabled">Ship Fitting <i className="fas fa-times"></i></Link>
                    <Link className="nav-link disabled">Jump Gate Refuel <i className="fas fa-times"></i></Link>
                    <Link className="nav-link" target="_blank" to="http://localhost:8081/api">API for Geeks <i className="fas fa-sync"></i></Link>
                    <Link className="nav-link" to="/about">About <i className="fas fa-sync"></i></Link>
                </div>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;