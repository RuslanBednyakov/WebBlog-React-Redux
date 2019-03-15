import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route} from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';

import store from './core/store';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import MainContainer from './containers';
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp';
import Footer from './components/Footer';

export default class App extends Component { 


  render() {

   return (
      <Provider store={store}>
          <BrowserRouter >
            <React.Fragment>
              <div className='content'>
                <Header />
                <article className='section'>
                  <NavigationBar />
                  <div className='container'>
                    <div className ='main'>
                      <Switch>
                        <Route path='/sign-up' component={SignUp} />
                        <Route path='/sign-in' component={SignIn} />
                        <Route path="/" render={ props => <MainContainer {...props}/> } />
                      </Switch>
                    </div>
                  </div>
                </article>
              </div>
              <Footer />
            </React.Fragment>
          </BrowserRouter>
      </Provider>
    );
  }
}