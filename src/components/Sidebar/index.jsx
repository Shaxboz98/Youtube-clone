import React, { Component } from 'react'
import { Container, Icon, Item, Items, Text, Title } from './style';
import { data, data2, data3 } from '../../utils/sidebar';
class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Items>
          {data.map(({id,title,icon})=>{
            return(
          <Item key={id}>
            <Icon src={icon}/>
            <Title>
              {title}
            </Title>
            
          </Item>
          
            )
          })}
          
        </Items>
        <Items>
          {data2.map(({id,title,icon})=>{
            return(
          <Item key={id}>
            <Icon src={icon}/>
            <Title>
              {title}
            </Title>
            
          </Item>
          
            )
          })}
          
        </Items>
        <Items>
          <Text>YOUTUBE’DEN DAHA FAZLA İÇERİK</Text>
          {data3.map(({id,title,icon})=>{
            return(
          <Item key={id}>
            <Icon src={icon}/>
            <Title>
              {title}
            </Title>
            
          </Item>
          
            )
          })}
          
        </Items>
      </Container>
    )
  }
}
export default Sidebar;