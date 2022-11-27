import Header from './content/Header';
import Head from './content/Head';
import Navbar from './home/Navbar';
import Announcment from './content/Announcment';
import LeftBar from './home/Leftbar';
import MiddleSection from './home/Middlesection';
import RightSection from './home/Rightbar'
import Footer from './content/Footer'


function App() {
  return (
    <html>
      <Head />
    <body>
        <Header />
        <Navbar />
          <Announcment />
      <section class='container-fluid'>
        <div class='row'>
            <LeftBar />
            <MiddleSection />
            <RightSection />
        </div>
            <Footer />
      </section>
    </body>
  </html>
  );
}

export default App;
