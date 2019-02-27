import styled from 'styled-components'
const theme = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../../../styles/partials/_variables.scss')
import { getDataPropsBtn } from './propsButton'

const dataPropsBtn = getDataPropsBtn(theme)

function buttonColor (colorFromProps, typeFromProps) {
  if(colorFromProps !== undefined || typeFromProps !== undefined){
    const { color, backgroundColor } = dataPropsBtn.color[colorFromProps]
    if(typeFromProps === 'secondary') {
      return {
        backgroundColor: color,
        color: backgroundColor,
        border: `1px solid ${backgroundColor}`,
        ':hover' : {
          backgroundColor,
          color
        }
      }
    } else {
      return {
        ...dataPropsBtn.color[colorFromProps],
      }
    }
  }
}

function buttonSize(size){
  return {
    ...dataPropsBtn.size[size || 'default']
  }
}

function buttonLoading(isLoading){
  if(isLoading === true) {
    return {
      padding: `11px 66px`
    }
  }
}

function buttonSocialMedia(socialMedia){
  if(socialMedia === 'whatsapp'){
    return{
      color: theme.clrField04,
      backgroundColor: theme.clrWhatsapp,
    }
  }
  if(socialMedia === 'facebook'){
    return{
      color: theme.clrField04,
      backgroundColor: theme.clrFacebook,
      padding: `0px`,
      minWidth: `100%`,
    }
  }
}

const ButtonWrapper = styled.div`
button {
  display: inline-block;
  border: 0;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 4px;
  transition: all .35s ease;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 10px 40px;
  font-size: 16px;
  &:focus {
    outline: none;
    color: inherit;
  }
  ${ props => buttonColor(props.color, props.type)}
  ${ props => buttonSize(props.size) }
  ${ props => buttonLoading(props.isLoading)}
  ${ props => buttonSocialMedia(props.socialMedia)}
}
`
const Loader = styled.div`
  svg {
    width: 18px;
    height: 18px;
    display:inline-block;
  }
`

const WhatsappContent = styled.div`
  .whatsapp-text {
    margin-left: 10px;
  }
`

const FacebookContent = styled.div`
  display: flex;
  .facebook-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1em;
    margin-right: 1em;
  }
  .facebook-line {
    height: 37px;
    border: 1px solid #4065B1;
  }
  .facebook-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    .counter {
      margin-right: 0.5em;
    }
  }
`

export {ButtonWrapper, Loader, WhatsappContent, FacebookContent}
