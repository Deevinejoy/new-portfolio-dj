import './About.css'
import {Slide} from 'react-awesome-reveal'
import {Flip} from 'react-awesome-reveal'


const About = () => {
  return (
    <div className='container about-sect' id='about'>
            <Slide direction='right'>
                    <div className='about-img'>
                          <img  src='/img/Divine-joy.jpeg' alt="pic" />
                    </div>        
            </Slide>
            <div className='about-det'>
                <Flip direction='left'>
                    <h2>About me</h2>
                </Flip>
                <span className='line'></span>
                <Slide right>
                    <p> I am Divine-joy, a dedicated Frontend developer with a passion for creating innovative solutions through coding. With a strong work ethic and attention to details, I excel in developing clean and efficient code. <br/>My commitment to continuous learning and problem solving skills makes me a vaulable asset to any Tech team and my drive to deliver high quality results set me apart as a hardworking developer ready to take on new challenges.
                    </p>
                </Slide>
            </div>
    </div>
  )
}

export default About
