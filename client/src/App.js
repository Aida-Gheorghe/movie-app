import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import User from './components/User'
import Create from './components/user/Create'
import UserDetails from './components/user/UserDetails'
import Edit from './components/user/Edit'
import Update from './components/user/Update'
import NotFound from './components/user/NotFound'
import MovieDetailPage from './components/favorite/MovieDetailPage'
import FavoritePage from './components/favorite/FavoritePage'
import Search from './components/Search'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movie/:id">
              <MovieDetailPage />
            </Route>
            <Route exact path="/favorite">
              <FavoritePage />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            {/*pauza! */}
            <Route exact path="/users">
              <User />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path="/detail/:id">
              <UserDetails />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/update/:id">
              <Update />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
