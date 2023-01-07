import React, { Component } from 'react';
import Sidebar from '../Main/Sidebar/index';
import Section from './Section';
import { Container } from './style';

class Main extends Component {
  render() {
    return (
      <Container>
        <Sidebar/>
        <Section/>
      </Container>
    );
  }
}

export default Main;