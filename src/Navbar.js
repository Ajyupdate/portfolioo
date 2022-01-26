import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div>
            


            <nav className=" navbar navbar-light  fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/"><span className="Ajibade">AJIBADE</span> <span className="Emmanuel">EMMANUEL</span></Link>
              <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><span className="Ajibade">AJIBADE</span> <span className="Emmanuel">EMMANUEL</span></h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="About">About me</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="Projects">Past Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="Contact">Contact Ajibade</Link>
                    </li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </nav>
            
        </div>
     );
}
 
export default Navbar;