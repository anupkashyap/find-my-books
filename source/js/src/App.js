import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import BookCards from './Components/BookCards';
import BottomButtons from './Components/BottomButtons'
import BookList from './Components/BookList'
import Settings from './Components/Settings'
import Home from './Components/Home'
import Help from './Components/Help'

function App() {
 
  return (
    <div>

      <Router>
        <Header></Header>
        <Switch>
          <Route path="/books">
            <BookCards />
            {/* <BottomButtons /> */}
          </Route>
          <Route path="/list">
            <BookList />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/">
          <BookCards />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
