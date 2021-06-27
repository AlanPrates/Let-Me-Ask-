<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextProvider } from "./contexts/AuthContext"

import {ThemeContextProvider} from "./contexts/ThemeContext"
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";
=======
import { Route,  BrowserRouter, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9

import { Home } from "./pages/Home";
import { Room } from './pages/Room';
import { NewRoom } from "./pages/NewRoom";
import { AdminRoom } from './pages/AdminRoom';

function App() {
  
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <ThemeContextProvider>
=======
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
<<<<<<< HEAD
      </ThemeContextProvider>
=======
>>>>>>> 9c62c098d40220c2ada32825a8affbb0307421c9
    </BrowserRouter>
  );
}
export default App;
