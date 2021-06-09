import { Route, Switch } from 'react-router';
import Header from "./components/header"
import Home from './components/home';
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/product" exact component={Product}/>
      </Switch>
     
    </div>
  );
}

export default App;
