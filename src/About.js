import Ajibade from './image/Ajibade.jpg'
import EMMANUEL from './cv/EMMANUEL.pdf'
import { Link } from 'react-router-dom';
const About = () => {
    return ( 
        <div className=" row mt-5">
            <div className="col-md-6 container about-div">
                <h1 className='m-5 about-me'><b>ABOUT ME</b></h1>
            
                <div className='m-5'>
                    <p>Hi, my name is Ajibade Emmanuel. I am a highly skilled,
                        self-taught frontend developer and a Mathematics and computer science student of the University
                        of Lagos.</p>
                    <p>With a strong Mathematical background, I found coding 
                        very interesting as I am very focused in solving problems involving codes.
                    </p>
                    <p>Outside web development I watch and play football and also solve complex Mathematical
                        problem for fun and boredom
                    </p>
                    <p><b>I am open for frontend development roles</b></p>
                </div>

                <div className=' about-button-div row m-5'>
                <button type="button" className="btn contact-btn  mb-1"><Link to="/Contact">Contact Ajibade</Link></button>
                <button type="button" className="btn download-btn "><a href={EMMANUEL} download="EMMANUEL.pdf"> Download Resume </a></button>


                    
                </div>

                


                
                
            </div>
            <div className='col-md-6'>
                <img src={Ajibade} className="img-fluid m-2" alt='Ajibade'/>
            </div>

        </div>
     );
}
 
export default About;