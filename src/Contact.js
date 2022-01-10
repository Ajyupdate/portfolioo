import { Link } from "react-router-dom";
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
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
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
                        

                        {/* <li className="list-inline-item"><a rel={'external'} className="fa fa-whatsapp" target="_blank" href={"https://wa.me/2348178555400"}/>Whatsapp</li>
                        <li className="list-inline-item"><a rel={'external'} className="fas fa-envelope-square" target="_blank" href={"https://ajibadeemmanuel58@gmail.com"}/>Gmail</li>
                        <li className="list-inline-item"><a rel={'external'} className="fab fa-linkedin-in" target="_blank" href={"https://www.linkedin.com/in/ajibade-emmanuel-411916178/"}/>linkedin</li>
                        <li className="list-inline-item"><a rel={'external'} className="fab fa-facebook-f" target="_blank" href={"https://www.facebook.com/adetomiwa.emmanuel"}/>Facebook</li>
                        <li className="list-inline-item"><a rel={'external'} className="fab fa-twitter" target="_blank" href={"https://twitter.com/Ajy_update"} />twitter</li>
                        <li className="list-inline-item"><a rel={'external'} className="fab fa-github" target="_blank" href={"https://github.com/Ajyupdate"}/>github</li>
                         */}
                        <li><Link to={{pathname: "https://wa.me/2348023030222"}} target="_blank"><i className="fa fa-whatsapp"></i></Link></li>
                        <li><i className="fas fa-envelope-square"></i>  <Link to={{pathname: "https://moskolengr@gmail.com"}} target="_blank">Gmail</Link></li>
                        <li><i className="fab fa-linkedin-in"></i>      <Link to={{pathname: "https://linkedin.com/linkedin"}} target="_blank">Linkedin</Link></li>
                        <li><i className="fab fa-facebook-f"></i>       <Link to={{pathname: "https://www.facebook.com/Moskol-Engineering-services-111454950997195"}} target="_blank">Facebook</Link></li>
                        <li><i className="fab fa-twitter"></i>          <Link to={{pathname: "https://twitter.com/moskolengr"}} target="_blank" >Twitter</Link></li>
                        <li><i className="fab fa-instagram"></i>        <Link to={{pathname: "https://Instagram.com/moskolengr"}} target="_blank" >Instagram</Link></li>
                    </ul>

                    
                </div>
            </div>
        </div>
     );
}
 
export default Contact;