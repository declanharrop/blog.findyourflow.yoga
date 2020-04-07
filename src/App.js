import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Utils/Nav';
import Footer from './Utils/Footer';

import BlogList from './Components/Blog/BlogList';
import BlogPost from './Components/Blog/BlogPost';

import Page404 from './Utils/Page404';
import ScrollToTop from './Utils/ScrollToTop';

const client = new ApolloClient({
  uri:
    'https://api-eu-central-1.graphcms.com/v2/ck8oi4m7431i201xv7u5w595g/master',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <ScrollToTop>
              <Nav />
              <Switch>
                <Route exact path="/" component={BlogList} />
                <Route exact path="/index" component={BlogList} />
                <Route path="/post/:id" component={BlogPost} />

                <Route component={Page404} />
              </Switch>
              <Footer />
            </ScrollToTop>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
