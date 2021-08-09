import About from "./pages/About";
import GlobalStyle from './components/GlobalStyled'
import Nav from "./components/Nav";
import OurWork from "./pages/OurWorks";
import Contact from "./pages/Contact";
import MovieDetail from "./pages/MovieDetail";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/work" exact component={OurWork} />
        <Route path="/work/:id" component={MovieDetail}/>
        <Route path="/contact" component={Contact} />
      </Switch>
      
    </div>
  );
}

export default App;
