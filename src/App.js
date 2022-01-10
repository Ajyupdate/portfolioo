import About from "./About";
import Navbar from "./Navbar";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";



function App() {
  return (

    
     <Router>
       <div className="App">
         <Navbar/>
           <div className="content">
    
             <Switch>
               <Route exact path="/">
                 <Home/>
               </Route>
               <Route exact path="/About">
                 <About/>
               </Route>
               <Route exact path="/Projects">
                 <Projects/>
               </Route>
               <Route exact path="/Contact">
                 <Contact/>
               </Route>
             </Switch>            
           </div>
           <Footer/>
         </div>
     </Router>
    


      
    
  );
}

export default App;
