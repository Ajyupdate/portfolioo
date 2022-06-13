import facebookIcon from './image/facebookIcon.jpg'
import githubIcon from './image/githubIcon.jpg'
import gmailIcon from './image/gmailIcon.jpg'
import TwitterIcon from './image/TwitterIcon.jpg'
import watsappIcon from './image/watsappIcon.jpg'
import linkdinIcon from './image/linkdinIcon.svg'
import { useState } from 'react'



const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, setIsPending] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault()
        const details = {email, name, message};
        setIsPending(true)

        fetch('http://localhost:8000', {
        method: 'POST',
        headers : {"Content-Type": "application/json"},
        body: JSON.stringify(details)
        }).then(() =>{
            console.log('new message added')
            setIsPending(false)
        })
    }
    
    
    return ( 

        <div className="container text-center w-70 mt-5">
            <h2 data-aos="slide-up" >Contact Ajibade</h2>
            <div className="container text-center">
                
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" data-aos="fade-right" className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" data-aos="fade-left" className="form-text">I will never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" value={name} data-aos="fade-right" className="form-label">Your Name</label>
                            <input type="Text" className="form-control" onChange={(e) => setName(e.target.value)} id="exampleInputText1"/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" value={message} className="form-label">Message</label>
                            <textarea className="form-control" onChange={(e) => setMessage(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        {!isPending && <div className='send-button'>
                            <button >Send</button>
                        </div>}
                        {isPending && <div className="d-grid gap-2 send-button">
                            <button disabled>Send</button>
                        </div>}
                        
                        
                    </form>
                    <div className="social-contact-div">
                        <h6 className="mt-4" >You can reach out to me on social media</h6>
                        
                        {/* <li className="list-inline-item"><a rel={"noreferrer"}  className="fa fa-whatsapp" target="_blank" href={"https://wa.me/2348178555400"}/></li> */}
                        <div className="social-media-div">
                        <div><a target="_blank" rel="noreferrer" href="https://wa.me/2348178555400"><img src={watsappIcon} className="img-fluid " alt='Ajibade'/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://ajibadeemmanuel58@gmail.com"><img src={gmailIcon} className="img-fluid mt-1" alt='Ajibade'/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ajibade-emmanuel-411916178/"><img src={linkdinIcon} className="img-fluid" alt='Ajibade'/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://www.facebook.com/adetomiwa.emmanuel"><img src={facebookIcon} className="img-fluid" alt='Ajibade'/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://twitter.com/Ajy_update"><img src={TwitterIcon} className="img-fluid " alt='Ajibade'/></a></div>
                        <div><a target="_blank" rel="noreferrer" href="https://github.com/Ajyupdate"><img src={githubIcon} className="img-fluid " alt='Ajibade'/></a></div> 
                    </div>

                        
                        </div>

                        
                    
                </div>

                
            </div>
        </div>
     );
}
 
export default Contact;