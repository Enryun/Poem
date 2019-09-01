import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar.component';
import HomePage from './pages/HomePage/HomePage.component';
import FeaturesPage from './pages/Features/FeaturesPage.component';
import DonatePage from './pages/Donate/DonatePage.component';
import ErrorPage from './pages/Error/Error.component';
import Footer from './components/Footer/footer.component';
import Contact from './pages/Contact/contact.component';
import {PoemContext} from './ContextAPI';

class App extends React.Component {

  static contextType = PoemContext;

  // handleChange = event => {
  //   // this.setState({searchField: event.target.value});
  //   console.log(event.target.value);
  // }

  render() {
    
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/features' component={FeaturesPage} />
          <Route exact path='/donate' component={DonatePage} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
