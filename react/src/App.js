import React, { Component } from 'react';
import Nav from './components/Nav';
import Info from './components/Info';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: 'disabled',
    }
  }
  

  validateTerms = () => {
    if (this.state.target === 'disabled') {
      this.setState({ target: 'false' })
    } else {
      this.setState({ target: 'disabled' })
    }
  }

  render() {
    return (
      <div>
        <Nav/>
        <Info/>
        <Contact
          validateTerms={this.validateTerms}
          target={this.state.target}
        />
        <Footer/>
      </div>
    );
  }
}
