
import explicit from './image/explicit.png'
import historyDate from './image/historyDate.png'
import moskolHome from './image/moskolHome.png'

import calculator from './image/calculator.png'
const Projects = () => {
  return ( 
    <div className="container  project-container">
      <h2>Projects</h2>

      {/* <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header " id="flush-headingOne">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" 
            aria-expanded="false" aria-controls="flush-collapseOne">
              Moskol engineering website
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
                <div className="row">

                  <div className="col-md-5">
                    <p>Moskol engineering is an engineering start up and needed it presence online for it growing customer
                    across the africa continent, So i built a website for the company using tools like react,BOOTSTRAP HTML, CSS, 
                    react hooks and routers...</p>

                    <div className='row m-3'> 
                    
                      <div className='col-md-6 p-2'><Link to={{pathname:'https://moskol.netlify.app'}} target="_blank"><button className='btn-primary rounded'>View live</button></Link></div>
                      <div className='col-md-6 p-2'><Link to={{pathname:'https://github.com/Ajyupdate/Moskol-Engineering-Website'}} target="_blank"><button className='btn-danger rounded'>View code </button></Link></div>
                    </div> 
                  </div>
                  <div className="col-md-5">
                    <div className='row view-button'>
                      <div className='col-md-6'>
                        <img src={moskolHome} height={300 } alt='A snap of the website in dektop mode'/>
                      </div>

                      <div className='col-md-6'>
                        <img src={moskol2} height={300 } alt='A snap of the website in mobile view'/>
                      </div>
                    </div>
                    
                  </div> 


                </div>
            </div>
          </div>
        </div>



        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              History Date App
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <div className="row">

                <div className="col-md-5">
                  <p>This is an app that returns a notable event in History of a date input in by the user.
                  I used the Fetch API to fetch the data from a demo cors API.
                  It was mainly written with javascript</p>
                  <div className='row m-3'> 
                  <div className='col-md-6 p-2'><Link to={{pathname:'https://ajyupdate.github.io/History-date-app/'}} target="_blank"><button className='btn-primary rounded'>View live</button></Link></div>
                      <div className='col-md-6 p-2'><Link to={{pathname:'https://github.com/Ajyupdate/History-date-app'}} target="_blank"><button className='btn-danger rounded'>View code </button></Link></div>
                    </div> 
                </div>

                <div className="col-md-5">
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src={historyDate} height={300 } alt='A snap of the app'/>
                    </div>

                    <div className='col-md-6'>
                    
                    </div>

                  </div>

                </div>        
                </div>
            </div>
          </div>
        </div>



        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              ExplicitSuccess.com Clone
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            <div className="row">

              <div className="col-md-5">
                <p>I so much loved the structure and design 
                  of <Link to="explicitsuccess.com">explicitsuccess website</Link> so i decided 
                  to make a replica of it without using a javascript framework. So i built this using HTML, CSS and javascript </p>


                <div className='row m-3'> 
                <div className='col-md-6 p-2'><Link to={{pathname:'https://ajyupdate.github.io/Explicitsuccess.com-clone/'}} target="_blank"><button className='btn-primary rounded'>View live</button></Link></div>
                      <div className='col-md-6 p-2'><Link to={{pathname:'https://github.com/Ajyupdate/Explicitsuccess.com-clone'}} target="_blank"><button className='btn-danger rounded'>View code </button></Link></div>
                  </div> 
                  
              </div>

              <div className="col-md-5">
                <div className='row'>
                  <div className='col-md-6'>
                    <img src={explicit} height={300 } alt='A Snap of the website in mobile view'/>
                  </div>

                  <div className='col-md-6'>
                  <img src={explicit2} height={300 } alt='A snap of the website in dektop view'/>
                  </div>

                </div>
            
              </div>        
            </div>

        
      </div>

      
      </div>

        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
              Blackview A20 phone Calculator
            </button>
          </h2>
          <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
            <div className="row">

              <div className="col-md-5">
                <p>I got so bored pressing my phone one day so i decided to code 
                  some User interface of the phone.
                </p>
                <p>This is the result of the calculator of my phone's Blackview A20 calculator</p>
                <div className='row m-3'> 
                <div className='col-md-6 p-2'><Link to={{pathname:'https://ajyupdate.github.io/My-Phone-calculator/'}} target="_blank"><button className='btn-primary rounded'>View live</button></Link></div>
                      <div className='col-md-6 p-2'><Link to={{pathname:'https://github.com/Ajyupdate/My-Phone-calculator'}} target="_blank"><button className='btn-danger rounded'>View code </button></Link></div>
                  </div> 
              </div>
              <div className="col-md-5">
                <div className='row'>
                  <div className='col-md-6'>
                    <img src={calculator} height={300 } alt='the snap'/>
                  </div>

                  <div className='col-md-6'>
                  
                  </div>
                </div>

              </div>        
            </div>
            </div>
          </div>
        </div>


      </div> */}












    <div className="accordion accordion-flush" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Moskol Engineering Website
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <div className="row">

          <div className="col-md-5">
            <p>Moskol engineering is an engineering start up and needed it presence online for it growing customer
            across the africa continent, So i built a website for the company using tools like react,BOOTSTRAP HTML, CSS, 
            react hooks and routers...</p>

            
            <div className='project-button-div'>
    
            <button type="button" className="btn live-btn "><a href="https://moskol.netlify.app" target="_blank" rel="noreferrer">View Live</a></button>
            <button type="button" className="btn code-btn m-2"><a href='https://github.com/Ajyupdate/Moskol-Engineering-Website' target="_blank" rel="noreferrer"> View Code </a></button>
          </div>  
        </div>
        <div className="col-md-5">
          <div className='row view-button'>
            <div className='col-md-6'>
              <img src={moskolHome} height={300 } alt='A snap of the website in dektop mode'/>
            </div>

            {/* <div className='col-md-6'>
              <img src={moskol2} height={300 } alt='A snap of the website in mobile view'/>
            </div> */}
          </div>
          
        </div>   
      </div>
      </div>
      </div>
      </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      History Date App
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div className="row">

    <div className="col-md-5">
    <p>This is an app that returns a notable event in History of a date input in by the user.
    I used the Fetch API to fetch the data from a demo cors API.
    It was mainly written with javascript</p>
    

    <div className='project-button-div'>
    
      <button type="button" className="btn live-btn "><a href="https://ajyupdate.github.io/History-date-app/" target="_blank" rel="noreferrer">View Live</a></button>
      <button type="button" className="btn code-btn m-2"><a href='https://github.com/Ajyupdate/History-date-app' target="_blank" rel="noreferrer"> View Code </a></button>
    </div>  



    </div>

    <div className="col-md-5">
    <div className='row'>
    <div className='col-md-6'>
    <img src={historyDate} height={300 } alt='A snap of the app'/>
    </div>

    <div className='col-md-6'>

    </div>

    </div>

    </div>        
    </div>
    </div>
    </div>
    </div>


    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      ExplicitSuccess.com Clone
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div className="row">

    <div className="col-md-5">
    <p>I so much loved the structure and design 
    of <a href="explicitsuccess.com">explicitsuccess website</a> so i decided 
    to make a replica of it without using a javascript framework. So i built this using HTML, CSS and javascript </p>


   
    <div className='project-button-div'>
    
      <button type="button" className="btn live-btn "><a href="https://ajyupdate.github.io/Explicitsuccess.com-clone" target="_blank" rel="noreferrer">View Live</a></button>
      <button type="button" className="btn code-btn m-2"><a href='https://github.com/Ajyupdate/Explicitsuccess.com-clone' target="_blank" rel="noreferrer"> View Code </a></button>
    </div>  
    

    </div>

    <div className="col-md-5">
    <div className='row'>
    <div className='col-md-6'>
    <img src={explicit} height={300 } alt='A Snap of the website in mobile view'/>
    </div>

    {/* <div className='col-md-6'>
    <img src={explicit2} height={300 } alt='A snap of the website in dektop view'/>
    </div> */}

    </div>

    </div>        
    </div>
    </div>
    </div>
    </div>


    <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
    Blackview A20 phone Calculator
    </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    <div className="row">

                <div className="col-md-5">
                  <p>I got so bored pressing my phone one day so i decided to code 
                    some User interface of the phone.
                  </p>
                  <p>This is the result of the calculator of my phone's Blackview A20 calculator</p>
                  
                  <div className='project-button-div'>
    
                    <button type="button" className="btn live-btn "><a href="https://ajyupdate.github.io/My-Phone-calculator" target="_blank" rel="noreferrer">View Live</a></button>
                    <button type="button" className="btn code-btn m-2"><a href='https://github.com/Ajyupdate/My-Phone-calculator' target="_blank" rel="noreferrer"> View Code </a></button>
                  </div>  
                </div>
                <div className="col-md-5">
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src={calculator} height={300 } alt='the snap'/>
                    </div>

                    <div className='col-md-6'>
                    
                    </div>
                  </div>

                </div>        
              </div>
            </div>
            </div>
      </div>
      </div>



    </div>
  );
}
 
export default Projects
