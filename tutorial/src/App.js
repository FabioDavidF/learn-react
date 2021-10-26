import { Route, Switch } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'


function App() {
  return (
    <div className="App">

      <Switch>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>

      <Route path="/new-meetup">
        <NewMeetupPage />
      </Route>

      <Route path="/favorites" exact>
        <FavoritesPage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
