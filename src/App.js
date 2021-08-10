import About from "./pages/About";
import GlobalStyle from './components/GlobalStyled'
import Nav from "./components/Nav";
import OurWork from "./pages/OurWorks";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import {Switch, Route, useLocation} from 'react-router-dom';

//animation
import {AnimatePresence} from 'framer-motion';

function App() {

  const location = useLocation();
  

  return (
   
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={About} />
          <Route path="/work" exact component={OurWork} />
          <Route path="/work/:id" component={MovieDetail}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
