import React, { Component } from 'react';
import Nav from './items/Nav';
import SubNav from './items/SubNav';
import PageContent from './items/PageContent';
import Footer from './items/Footer';


class Home extends Component {


  render() {
    
    return (
      
          <div >
              <Nav />
              <SubNav />
              <PageContent />
              <Footer />
          </div>
      
    );
  }
}

export default Home;


