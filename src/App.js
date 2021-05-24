import './App.css';
import menu2 from './assets/images/menu2.png'

function App() {
  return (
    
   <nav>
     <ul className="container d-flex list-unstyled justify-content-between align-items-center">
       <li className="d-flex align-items-center">
         <a><img src={menu2} alt="menu" /></a>
         <a className="m-auto">fefe's blog</a>
       </li>
       <li ><a  href="#aslas"> Log-in & user profile pic</a></li>
     </ul>
   </nav>
  );
}

export default App;
