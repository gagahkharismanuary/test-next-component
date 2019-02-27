import React from 'react'
import Button from '../src/components/common/Button'
import ButttonWrapper from './button/style'

class ButtonShow extends React.Component {
  state = {
    isLoading: true
  }
  render(){
    return(
      <div>
        <ButttonWrapper>
          <div className="group">
            <div className="item">
              <Button.Default color="blue" type="primary">
                DEFAULT BLUE PRIMARY
              </Button.Default>
            </div>
            <div className="item">
              <Button.Default color="pink" type="secondary">
                DEFAULT PINK PRIMARY
              </Button.Default>
            </div>
            <div className="item">
              <Button.Default color="green" type="primary" size="large">
                DEFAULT GREEN PRIMARY
              </Button.Default>
            </div>
          </div>
          <div className="group">
            <div className="item">
              <Button.Default color="blue" type="primary" size="large" loading={true}/>
            </div>
            <div className="item">
              <Button.Default color="green" type="primary" size="large" loading={true}/>
            </div>
            <div className="item">
              <Button.Default color="pink" type="primary" size="large" loading={true}/>
            </div>
          </div>
          <div className="group">
            <div className="item">
              <Button.Whatsapp>
              </Button.Whatsapp>
            </div>
          </div>
          <div className="group">
            <div className="item">
              <Button.Facebook socialMedia="facebook" typeFb="counter" counter={100}>
                Shares
              </Button.Facebook>
            </div>
          </div>
        </ButttonWrapper>
      </div>
    )
  }
}


class ButtonPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isDone: false
    }
  }
  componentDidMount(){
    this.setState({
      isDone:true
    })
  }
  render(){
    return(
      <div>
        {this.state.isDone?
          (<ButtonShow/>)
          :
          (<h1>Loading</h1>)}
      </div>
    )
  }
}



export default ButtonPage
