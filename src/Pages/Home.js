import Header from '../content/Header';
import Leftsection from '../home/Leftsection';
import Middlesection from '../home/Middlesection';
import Rightsection from '../home/Rightsection'
import Navbar from "../home/Navbar";
import Announcment from '../content/Announcment';
import Footer from '../content/Footer'

const Home = () => {
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
            <Leftsection />
          </div>
          <div className='col order-2'>
            <Middlesection />
          </div>
          <div className='col order-3'>
            <Rightsection />
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
export default Home;