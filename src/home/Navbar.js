import Clock from '../content/Clock'
const Navbar = () => {
    return (
<div className="container-fluid">
<button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <i className="fas fa-bars"></i>
</button>
  <div className="collapse navbar-collapse" id="navbarLeftAlignExample">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">Home Page</a>
    </li>
    <ul className="navbar-nav">
  <li className="nav-item">
    <a className="nav-link" href="/ships">Ship Manufacturing  <i className="fas fa-sync"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link dissabled" href="">Citadel Manufacturing <i className="fas fa-times"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link  dissabled" href="">Reprocessing <i className="fas fa-times"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link dissabled" href="">Ship Fitting <i className="fas fa-times"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link dissabled" href="">Jump Gate Refuel <i className="fas fa-times"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link dissabled" href="http://localhost:8081/api">API for Geeks <i className="fas fa-sync"></i></a>
  </li>
  <li className="nav-item">
    <a className="nav-link  dissabled" href="/about">About <i className="fas fa-sync"></i></a>
  </li>
</ul>
  </ul>
</div>
<span className="navbar-text">
        <Clock />
</span>
</div>
    )
}
export default Navbar;