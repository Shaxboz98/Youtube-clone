import React, { Component } from "react";
// import Sidebar from "../Sidebar";
import {
  Container,
  Input,
  NavCenter,
  NavLeft,
  InputWrapper,
  NavRigth,
  SearchWrapper,
} from "./style";

class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
        <Container>
          <NavLeft>
            <NavLeft.Menu />
            <NavLeft.Logo />
          </NavLeft>
          <NavCenter>
            <InputWrapper>
              <Input placeholder="Search" />
              <SearchWrapper>
                <SearchWrapper.Search />
              </SearchWrapper>
            </InputWrapper>
          </NavCenter>
          <NavRigth>
            <NavRigth.Camera />
            <NavRigth.Topbar />
            <NavRigth.Variants />
            <NavRigth.User />
          </NavRigth>
        </Container>
        {/* <Sidebar/> */}
      </div>
    );
  }
}

export default Navbar;
