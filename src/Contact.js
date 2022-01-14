
const Contact = () => {
    
    
    return ( 

        <div className="container text-center m-3">
            <h2>Contact Ajibade</h2>
            <div className="container row">
                
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputText1" className="form-label">Your Name</label>
                            <input type="Text" className="form-control" id="exampleInputText1"/>
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
`   `                </div>

                <div className="col-md-6">
                    <h6 className="m-5">You can reach out to me on social media</h6>
                    <ul className="list-inline">
                        
                        
                        
                        {/* <li className="list-inline-item"><a rel={"noreferrer"}  className="fa fa-whatsapp" target="_blank" href={"https://wa.me/2348178555400"}/></li> */}
                        

                        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://wa.me/2348178555400"><i className="fa fa-whatsapp"></i></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://ajibadeemmanuel58@gmail.com"><i className="fas fa-envelope-square"></i></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ajibade-emmanuel-411916178/"><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/adetomiwa.emmanuel"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://twitter.com/Ajy_update"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a target="_blank" rel="noreferrer" href="https://github.com/Ajyupdate"><i className="fab fa-github"></i></a></li> 
                    </ul>

                    
                </div>
            </div>
        </div>
     );
}
 
export default Contact;