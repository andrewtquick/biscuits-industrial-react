import Header from '../content/Header';
import Navbar from "../Ships/Navbar";
import Announcment from '../content/Announcment';
import Footer from '../content/Footer'
import Leftbar from '../Ships/Leftbar';
import Middlebar from '../Ships/Middlebar';
import Rightbar from '../Ships/Rightbar';
import { useParams } from 'react-router-dom';

const Ships = () => {
  const { id } = useParams();
  document.title=`How to build ${id}`
    return (
        <html>
    <body>
        <Header />
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Navbar />
      </nav>
          <Announcment />
      <div className='container-fluid'>
        <div className='row'>
              <Leftbar />
              <Middlebar />
              <Rightbar />
        </div>
          <div>
            <Footer />
          </div>
      </div>
    </body>
  </html>
      
    )
}
export default Ships;