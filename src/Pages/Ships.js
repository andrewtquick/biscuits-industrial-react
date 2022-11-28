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
      <section className='container-fluid'>
        <div className='row'>
          <div className='col order-1'>
            <Leftbar />
          </div>
          <div className='col order-2'>
            <Middlebar />
          </div>
          <div className='col order-3'>
            <Rightbar />
          </div>
        </div>
          <div>
            <Footer />
          </div>
      </section>
    </body>
  </html>
      
    )
}
export default Ships;