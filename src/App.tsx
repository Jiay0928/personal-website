import React, { useEffect } from 'react';
import './App.less';
import { Header } from './Components/header/header';
import { WelcomePage } from './pages/welcomePage/welcomePage';
import MainPage from './pages/mainPage/mainPage';
import { Switch,  Route} from "react-router-dom";
import ContactPage from './pages/contactPage/contactPage';


function App() {
  useEffect(() => console.log('mounted'), []);
  
  return (
    <div className="App">
      <Header/>
      
        <Switch>
          <Route path="/mainPage" ><MainPage/></Route>
          <Route path="/contact" ><ContactPage/></Route>
          <Route path="/" ><WelcomePage/></Route>
          

        </Switch>
      
      
      
      
       
    </div>
  );
}

export default App;
