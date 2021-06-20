import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Project from './components/Project';
import Content from './components/Content';
import Signin from './components/Signin';
import { auth } from './firebase';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return unsubscribe
  }, [])

  return (
    <div className="App">
      {user ? 
      // 
      <Router basename='/sampleproject'>
        <Switch>
          <Route exact path="/">
            <Project />
          </Route>
          <Route exact path="/content/:id">
            <Content />
          </Route>
        </Switch>
    </Router> 
      
      : <Signin />}

    </div>
  );
}

export default App;
