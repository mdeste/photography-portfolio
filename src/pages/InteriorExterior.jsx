import interiorExterior1 from '../assets/images/projects/interior exterior/interiorExterior1.jpg'
import interiorExterior2 from '../assets/images/projects/interior exterior/interiorExterior2.jpg'
import interiorExterior3 from '../assets/images/projects/interior exterior/interiorExterior3.jpg'
import interiorExterior4 from '../assets/images/projects/interior exterior/interiorExterior4.jpg'
import interiorExterior5 from '../assets/images/projects/interior exterior/interiorExterior5.jpg'
import interiorExterior6 from '../assets/images/projects/interior exterior/interiorExterior6.jpg'
import interiorExterior7 from '../assets/images/projects/interior exterior/interiorExterior7.jpg'

function InteriorExterior() {
  return (
    <>
    <div className="pageContainer">
      <main className="mainDivPageContentProject">
        <div className="shortBioDetails">
          <p className="shortBioDetailsText">
            <em>Interior / Exterior</em>
          </p>
          <p className="shortBioDetailsText">
            30 May—30 June 2019
          </p>
          <p className="shortBioDetailsText">
            Solo exhibition at UNIT Projects, Blackpool
          </p>
          <p className="shortBioDetailsText">
            Curated by Sophie Fuce
          </p>
        </div>
        <div className="bioStatement">
          <h1 className="statementTitle">Press Release</h1>
          <p className="bioStatementText">
            UNIT is pleased to present <em>Interior / Exterior</em>, an exhibition of photographs by Michael D’Este. <em>Interior / Exterior</em> is a selection of photographs taken on 35mm film in colour and black and white.
          </p>
          <p className="bioStatementText">
            The camera has the potential to make the familiar unfamiliar; the lens is both an entryway and a blockade to a nexus of intersecting realities. The works in <em>Interior / Exterior</em> are visual but also contextual records of specific places as the artist experienced them at a distinct moment in time. When viewed together, D’Este’s photographs manifest as a complex archive of everyday information.
          </p>
          <p className="bioStatementText">
            Each image in <em>Interior / Exterior</em> serves as the opening chapter of a story the audience writes. The photographs present interconnected and singular worlds. Night skies; the edge of an abandoned basketball court at twilight; an urban estate viewed through a train window heading to an undisclosed location; a ladder; an open window. Ordinary objects and vistas are re-framed and reimagined, and the audience is prompted to conceptualise what lies beyond.
          </p>
          <p className="bioStatementText">
            —Sophie Fuce, May 2019
          </p>
        </div>
        <div className="projectImgWrapper">
          <img 
            className="projectImgLandscape" 
            src={interiorExterior2} 
            alt="A basketball court at dusk, silhouetted against the setting sun" 
            loading="lazy"/>
            <img 
            className="projectImgPortrait" 
            src={interiorExterior1} 
            alt="A ladder drops into the sea from jagged black rocks under a hazy blue sky" 
            loading="lazy"/>
            <img 
            className="projectImgLandscape" 
            src={interiorExterior3} 
            alt="An installation shot of the photographic prints in-situ under bright white gallery flourescent lighting" 
            loading="lazy"/>
            <img 
            className="projectImgLandscape" 
            src={interiorExterior4} 
            alt="An installation shot of the photographic prints in-situ under bright white gallery flourescent lighting" 
            loading="lazy"/>
            <img 
            className="projectImgLandscape" 
            src={interiorExterior5} 
            alt="Suburban rooftops silhouetted against a dramatic, cloudy morning sky" 
            loading="lazy"/>
            <img 
            className="projectImgPortrait" 
            src={interiorExterior6} 
            alt="An installation shot of the photographic prints in-situ under bright white gallery flourescent lighting" 
            loading="lazy"/>
            <img 
            className="projectImgLandscape" 
            src={interiorExterior7} 
            alt="A black-and-white image shot from a car as it speeds down the road into the fog, flanked on either side by leafless trees" 
            loading="lazy"/>
        </div>
      </main>
    </div>
    </>
  )
}
export default InteriorExterior