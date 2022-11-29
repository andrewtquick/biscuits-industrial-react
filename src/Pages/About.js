import Header from "../content/Header";
import Navbar from "../home/Navbar";

const About = () => {

    document.title='About Biscuits Industrial'
    return (
    <div>
        <Header />
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Navbar />
        </nav>
        Hosted website uptime is:  uptime <p></p>
        Average server load:  load <p></p>
        Server Operating system is: type <p></p>
        Server memory left:  memoryLeft  /  memoryTotal 
  </div>
    )
}
export default About;