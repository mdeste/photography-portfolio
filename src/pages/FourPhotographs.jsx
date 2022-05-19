import fourPhotographs1 from '../assets/images/projects/four photographs/fourPhotographs1.jpg'
import fourPhotographs2 from '../assets/images/projects/four photographs/fourPhotographs2.jpg'
import fourPhotographs3 from '../assets/images/projects/four photographs/fourPhotographs3.jpg'
import fourPhotographs4 from '../assets/images/projects/four photographs/fourPhotographs4.jpg'

function FourPhotographs() {
  return (
    <>
    <div className="pageContainer">
      <main className="mainDivPageContentProject">
        <div className="shortBioDetails">
          <p className="shortBioDetailsText">
            <em>Four Photographs of an Open-Pit Mine</em>
          </p>
          <p className="shortBioDetailsText">
            2021
          </p>
          <p className="shortBioDetailsText">         
            Prints produced from 35mm black & white negatives
          </p>
          <br></br>
          <p className="shortBioDetailsText">
            Dimensions variable
          </p>
        </div>
        <div className="bioStatement">
          <h1 className="statementTitle">Press Release</h1>
          <p className="bioStatementText">
            A series of images created during a hike across the moor between Buckton Vale and Dovestone Reservoir, Greater Manchester. These images seek to echo the anonymity of style commonly seen in topographic studies of the post-industrial landscapes of Northern England.
          </p>
        </div>
        <div className="projectImgWrapper">
          <img 
            className="projectImgPortrait" 
            src={fourPhotographs1} 
            alt="A broken fence lies above a steep dirt path, flanked on both sides by wiry moorland sedge" 
            loading="lazy"/>
            <img 
            className="projectImgPortrait" 
            src={fourPhotographs2} 
            alt="Piles of mining spoil climb the sides of the mine, grazed here and there by the tracks of industrial digging equipment" 
            loading="lazy"/>
            <img 
            className="projectImgPortrait" 
            src={fourPhotographs3} 
            alt="A path is cut through the earth, zig-zagging across the bottom half of the frame and into the distance under a cloudless expanse of grey sky" 
            loading="lazy"/>
            <img 
            className="projectImgPortrait" 
            src={fourPhotographs4} 
            alt="An almost martian landscape of mining spoil and hewn rock" 
            loading="lazy"/>
        </div>
      </main>
    </div>
    </>
  )
}
export default FourPhotographs