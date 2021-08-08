import About from "./pages/About";
import GlobalStyle from './components/GlobalStyled'
import Nav from "./components/Nav";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import {Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      
    </div>
  );
}

export default App;
