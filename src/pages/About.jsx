function About() {
  return (
    <>
    <div className="pageContainer">
      <main className="mainDivPageContentAbout">
        <div className="shortBioDetails">
          <p className="shortBioDetailsText">
            Michael D'Este
          </p>
          <p className="shortBioDetailsText">
            b. 1993, Venice (IT)
          </p>
          <p className="shortBioDetailsText">
            Based In Manchester (UK)</p>
        </div>
        <div className="bioStatement">
          <h1 className="statementTitle">Statement</h1>
          <p className="bioStatementText">
            I work with still image, text and visual design employed across various presentation platforms—from self-published books and print series to exhibitions and online-only projects.  
          </p>
          <p className="bioStatementText">
            I am interested in the history and conceptualisation of landscape photography and more specifically the work of the photographers associated with the New Topographics movement, with a particular emphasis on the ideas of how narrative and temporality intersect with space, as well as the ways in which the "natural" and the "built" converge. In short, I'm fascinated by the way we construct and connect disparate stories around the different places we see and experience, how we try to fill in the blanks when presented with unfamiliar yet ordinary environments, and the ways in which the banal can be reconfigured by practice of photography.
          </p>
        </div>
        <div className="educationDetails">
          <h1 className="educationTitle">Education</h1>
          <p className="educationDetailsText">
            MA Modern and Contemporary Literature - University of Manchester, 2018–2019
          </p>
          <p className="educationDetailsText">
            BA (Hons) Philosophy - University of Central Lancashire, 2015–2018
          </p>
        </div>
        <div className="enquiriesDetails">
          <h1 className="enquiriesTitle">Enquiries</h1>
          <a href="mailto:mail@michaeldeste.com?subject=Enquiry" className="enquiriesDetailsText">
            Email me!
          </a>
        </div>
      </main>
    </div>
    </>
  )
}
export default About