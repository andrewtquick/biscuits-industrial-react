import axios from "axios";
import Clock from "../Clock";
import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarNav,
} from "mdb-react-ui-kit";

const Navbar = () => {
  // Shows the hamburger menu button when in a small window
  const [showNav, setShowNav] = useState(false);

  // Controlling how the navbar operates, helps with changing the icon allow reverting
  // back to the normal navbar if people want out
  const [shipNav, setShipNav] = useState([]);

  // This allows you to call your backend for gathering ship types, etc..
  const getShipNav = () => {
    // Checks to see if there is an array already set
    // If not, it will skip over and call the backend
    if (shipNav.length > 0) {
      setShipNav([]);
    } else {
      try {
        // axios will return a promise for your api backend calls, we can use
        // .then and .catch here to process the data and throwing errors much more
        // cleanly to the console. console.warn is a great away to say there is a problem
        // versus the console.log, or using a toast library to throw pretty toast notifications
        axios
          .get("http://localhost:8081/api/navbar")
          .then((res) => {
            setShipNav(res.data);
          })
          .catch((err) => console.warn(err));
      } catch (error) {
        console.warn(error);
      }
    }
  };

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarLeftAlignExample"
          aria-controls="navbarLeftAlignExample"
          aria-expanded="false"
          aria-label="Toggle Navigation"
          onClick={() => setShowNav(!showNav)}
        >
          <i className="fas fa-bars"></i>
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav} className="h-50">
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#">
                Home Page
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={getShipNav}>
                Ship Manufacturing{" "}
                {shipNav.length > 0 ? (
                  <i className="fas fa-times" />
                ) : (
                  <i className="fas fa-sync" />
                )}
                {/* Here we can build the dropdown menus when we have data from the API */}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                Citadel Manufacturing <i className="fas fa-sync" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                Reprocessing <i className="fas fa-sync" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                Jump Gate Refuel <i className="fas fa-sync" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                API for Geeks <i className="fas fa-sync" />
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink>
                About <i className="fas fa-sync" />
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <div style={{ color: "lightgrey" }}>
          <Clock />
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
