import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const LeftBar = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="p-4 border-bottom" />

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Biscuits Industrial
              </h6>
              <p>
                Fan made website for helping new bros understand or just anyone
                that wants to get into industry!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Devs</h6>
              <p>
                <a href="#!" className="text-reset">
                  I Like Biscuits
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Site Tech</h6>
              <p>
                <a href="#!" className="text-reset">
                  Database provided by Steve
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Reactjs
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  MDB UI Kit for Reactjs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <a
                  href="https://twitter.com/BiscuitsIndust1"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fab icon="twitter" /> Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/SkippTekk"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fab icon="github" /> Github
                </a>
              </p>
              <p>
                <a
                  href="https://discord.gg/kksqmuu"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fab icon="discord" /> Discord
                </a>
              </p>
              <p>
                <a
                  href="https://developers.eveonline.com/resource/resources"
                  target="__blank"
                  className="text-secondary"
                >
                  <MDBIcon fas icon="database" /> Database
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Skipp Tekk
        </a>
      </div>
    </MDBFooter>
  );
};
export default LeftBar;
