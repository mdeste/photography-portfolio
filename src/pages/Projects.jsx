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
          alt="A path is cut through the earth, zig-zagging across the bottom half of the frame and into the distance under a cloudless expanse of grey sky" 
          className="projectsImg"  />
          <div className="captionWrapper">
            <figcaption className="imgCaption">Print Series, 2021</figcaption>
            <figcaption className="imgCaption"><em>Four Photographs of an Open-Pit Mine</em></figcaption>
          </div>
        </div>
        <div className="imgWrapper" onClick={() => navigate("/todivertwater")}>
          <img 
          src={toDivertWater3} 
          alt="Silhouetted trees line the right edge and the bottom of the frame, against the bright starry backdrop of the night sky" 
          className="projectsImg" />
          <div className="captionWrapper">
            <figcaption className="imgCaption">Publication, 2020</figcaption>
            <figcaption className="imgCaption"><em>To Divert Water</em></figcaption>
          </div>
        </div>
        <div className="imgWrapper" onClick={() => navigate("/interiorexterior")}>
          <img 
          src={interiorExterior1} 
          alt="A ladder drops into the sea from jagged black rocks under a hazy blue sky" 
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