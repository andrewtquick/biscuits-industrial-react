const LeftBar = () => {
    return (
        <div>
        <footer className="text-center text-lg-start bg-white text-muted">

          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

            <div className="me-5 d-none d-lg-block">
              <span>Stay connected or check up on the updates:</span>
            </div>

            <div>
              <a href="https://twitter.com/BiscuitsIndust1" target="__blank" className="me-4 link-secondary">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://github.com/SkippTekk" target="__blank" className="me-4 link-secondary">
                <i className="fab fa-github"></i>
              </a>
            </div>

          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>Biscuits Industrial
                  </h6>
                  <p>
                    Fan made website for helping new bros understand or just anyone that wants to get into industry!
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">
                    Devs
                  </h6>
                  <p>
                    <a href="https://evewho.com/character/95046472" target="__blank" className="text-reset">I like biscuits</a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">Stuff that the site uses</h6>
                  <p>
                    <a href="https://www.fuzzwork.co.uk/" target="__blank" className="text-reset">Database provided by Steve</a>
                  </p>
                  <p>
                    <a href="https://www.fuzzwork.co.uk/dump/" target="__blank" className="text-reset">Database dump</a>
                  </p>
                  <p>
                    <a href="https://www.eveonline.com/signup?invc=a9af4d7c-7d69-4d5c-bea7-3c4a1ec56493" target="_blank" className="text-reset">Referel code!</a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 className="text-uppercase fw-bold mb-4">Contact/info</h6>
                  <p><i className="fab fa-discord me-3 text-secondary" ></i><a href="https://discord.gg/kksqmuu" target="_blank"> Discord</a></p>
                  <p><i className="fas fa-database me-3 text-secondary" ></i><a href="https://developers.eveonline.com/resource/resources" target="blank">Database 2022-11-08</a></p>
                </div>

              </div>

            </div>
          </section>

          <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
            © 2022 Copyright:
            <a className="text-reset fw-bold" target="__blank" href="https://skipptekk.com">SkippTekk</a>
          </div>

        </footer>

        </div>
    )
}
export default LeftBar;