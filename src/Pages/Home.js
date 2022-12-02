import Header from "../components/Header/Header";
import Leftsection from "../home/Leftsection";
import Middlesection from "../home/Middlesection";
import Rightsection from "../home/Rightsection";
import Announcment from "../components/Announcement";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Announcment />
      <MDBRow>
        <MDBCol className="mb-3" order="1">
          <Leftsection />
        </MDBCol>
        <MDBCol className="mb-3" order="2">
          <Middlesection />
        </MDBCol>
        <MDBCol className="mb-3" order="3">
          <Rightsection />
        </MDBCol>
      </MDBRow>
      <Footer />
    </>
  );
};
export default Home;
