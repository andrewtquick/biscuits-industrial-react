import Header from '../content/Header';
import Leftsection from '../home/Leftsection';
import Rightsection from '../home/Rightsection'
import Navbar from "../Ships/Navbar";
import Announcment from '../content/Announcment';
import Footer from '../content/Footer'

const Ship = () => {
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
          <p>Hi there, thanks for checking out the website, To begin you will need to select a ship from the top navagation, </p>
            Here is an example
            <p><b>video will come later time.</b> </p>
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
export default Ship;