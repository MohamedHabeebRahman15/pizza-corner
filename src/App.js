import Navbar from "./component/navbar/navbar";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './component/pages/home/Home';
import dessert from './component/pages/dessert/Dessert';
import drink from './component/pages/drinks/Drinks';
import pizza from './component/pages/pizza/Pizza';
import Footer from "./component/footer/Footer";
import Desert1 from "./component/pages/dessert/desert_info/Desert1";
import Cornetto from "./component/pages/dessert/desert_info/Cornetto";
import Mangnum from "./component/pages/dessert/desert_info/Mangnum";
import tandoori from "./component/pages/dessert/desert_info/tandoori";
import Divine from "./component/pages/dessert/desert_info/Divine";

function App() {
  return (
    <Router>
   <Navbar />
   <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/dessert'  component={dessert}/>
     <Route path='/drinks'  component={drink}/>
     <Route path='/pizza'  component={pizza}/>
     <Route path='/desert/info' component={Desert1}/>
     <Route path='/desert/cornato_info' component={Cornetto}/>
     <Route path='/desert/mangum_info' component={Mangnum}/>
     <Route path='/desert/tandoori_info' component={tandoori}/>
     <Route path='/desert/divine_chocolate_info' component={Divine}/>
   </Switch>
   <Footer />
   </Router>
   
  );

}

export default App;
