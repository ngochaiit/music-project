import React, { Component } from 'react';
import Nav from './items/Nav';
import SubNav from './items/SubNav';
import SearchResults from './items/SearchResults';
import Footer from './items/Footer';


class ResultsPage extends Component {


  render() {
    
    return (
      
          <div >
              <Nav />
              <SubNav />
              <SearchResults />
              <Footer />
          </div>
      
    );
  }
}

export default ResultsPage;


