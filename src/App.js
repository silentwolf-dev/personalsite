import './style/App.css'
import NavbarComponent from './components/navbar/navbar';
import Home from './pages/Home'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
function App() {
  return (
   <Router>
    <div className="App">
      <NavbarComponent/>
      <Switch>
          <Route exact component={Home}/>
      </Switch>
    </div>
   </Router>
  );
}

export default App;
