import React, { Component } from 'react';
import { btnData } from '../../../utils/sidebar';
import { Btns, Container } from './style';
class Button extends Component {
  render() {
    return (
      <Container>
        {
          btnData.map(({id,name})=>{
            return(
           <div className="btnGroup" key={id}>
             <Btns>{name}</Btns>
           </div>
           )
          })
        }
      </Container>
    );
  }
}

export default Button;