import {useNavigate} from 'react-router-dom'
import fourPhotographs3 from '../assets/images/projects/four photographs/fourPhotographs3.jpg'
import interiorExterior1 from '../assets/images/projects/interior exterior/interiorExterior1.jpg'
import toDivertWater3 from '../assets/images/projects/to divert water/toDivertWater3.jpg'

function Projects() {
  const navigate = useNavigate()

  return (
    <>
    <div className="pageContainer">
      <div className="projectWrapper">
        <div className="imgWrapper" onClick={() => navigate("/fourphotographs")}>
          <img 
          src={fourPhotographs3} 
          alt="" 
          className="projectsImg"  />
          <div className="captionWrapper">
            <figcaption className="imgCaption">Print Series, 2021</figcaption>
            <figcaption className="imgCaption"><em>Four Photographs of an Open-Pit Mine</em></figcaption>
          </div>
        </div>
        <div className="imgWrapper" onClick={() => navigate("/todivertwater")}>
          <img 
          src={toDivertWater3} 
          alt="" 
          className="projectsImg" />
          <div className="captionWrapper">
            <figcaption className="imgCaption">Publication, 2020</figcaption>
            <figcaption className="imgCaption"><em>To Divert Water</em></figcaption>
          </div>
        </div>
        <div className="imgWrapper" onClick={() => navigate("/interiorexterior")}>
          <img 
          src={interiorExterior1} 
          alt="" 
          className="projectsImg" />
          <div className="captionWrapper">
            <figcaption className="imgCaption">Exhibition, 2019</figcaption>
            <figcaption className="imgCaption"><em>Interior / Exterior</em></figcaption>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Projects