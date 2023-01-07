import styled, { css } from 'styled-components'
import { ReactComponent as menu } from '../../assets/img/menu.svg'
import { ReactComponent as logo } from '../../assets/img/logo.svg'
import { ReactComponent as search } from '../../assets/img/search.svg'
import { ReactComponent as camera } from '../../assets/img/camera.svg'
import { ReactComponent as topbar } from '../../assets/img/left-topbar.svg'
import { ReactComponent as variants } from '../../assets/img/variants.svg'
import { ReactComponent as user } from '../../assets/img/user.svg'
const common=css`
display: flex;
align-items: center;
`
const Container=styled('div')`
width: 100%;
height: 56px;
background: #212121;
${common}
`
const NavLeft=styled('div')`
width: 300px;
gap: 27;
padding: 0 27px;
${common}
`
NavLeft.Menu=styled(menu)`

`
NavLeft.Logo=styled(logo)`
width: 120px;
`
const NavCenter=styled('div')`
flex: 1;
${common}
justify-content: center;
`
const InputWrapper=styled.div`
${common}
`
const Input =styled.input`
max-width: 574px;
min-width: 570px;
width: 100%;
height: 32px;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 2px 0px 0px 2px;
background: none;
padding: 4px 8px;
outline: none;
color: white;
@media (max-width:1200px) {
  min-width: 400px;
}
@media (max-width:1000px) {
  min-width: 300px;
}
`
const SearchWrapper =styled.div`
width: 65px;
height: 32px;
${common}
border: 1px solid rgba(255, 255, 255, 0.2);
justify-content: center;
background: rgba(255, 255, 255, 0.2);
border-radius: 0px 2px 2px 0px;
padding: 4px 8px;
cursor: pointer;

`
SearchWrapper.Search=styled(search)`

`
const NavRigth=styled('div')`
width: 300px;
${common}
justify-content: center;
gap: 24px;
`
NavRigth.Camera=styled(camera)`
/* width: 20px;
height: 13px; */
`
NavRigth.Topbar=styled(topbar)`
// width: 20px;
// height: 13px;
`
NavRigth.Variants=styled(variants)`
/* width: 20px;
height: 13px; */
`
NavRigth.User=styled(user)`
/* width: 20px;
height: 13px; */
`
export {Container,
  Input,
  NavLeft,SearchWrapper,
  InputWrapper,NavCenter,NavRigth}