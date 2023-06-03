import './App.css';
import Cards from './components/cards/Cards';
import Blue from './components/blue/Blue';
import Immersive from './Immersive';
import Instructors from './components/instructors/Instructors';
import Footer from './components/Footer';
import Foot from './components/foot/Foot';
import Header from './components/header/Header';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  
  return (
    <div className="App">
      < Header />
      < Cards />
      < Blue />
      < Immersive />
      < Instructors />
      < Footer />
      < Foot />

    </div>
  );
}

export default App;



// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Cards from './components/cards/Cards';
// import Blue from './components/blue/Blue';
// import Immersive from './Immersive';
// import Instructors from './components/instructors/Instructors';
// import Footer from './components/Footer';
// import Foot from './components/foot/Foot';
// import Header from './components/header/Header';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//         <Cards />
//         <Blue />
//         <Immersive />
//         <Instructors />
//         <Footer />
//         <Foot />
//       </div>
//     </Router>
//   );
// }

// export default App;
