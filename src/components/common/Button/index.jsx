import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper, Loader, WhatsappContent, FacebookContent } from './styledButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Default = (props) => {
  return(
    <ButtonWrapper color={props.color} size={props.size} type={props.type} isLoading={props.loading}>
      <button>
        {props.loading === true && (
          <Loader>
            <svg version="1.1" id="L9" x="0px" y="0px" viewBox="25 25 50 50">
              <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="1s"
                  from="0 50 50"
                  to="360 50 50"
                  repeatCount="indefinite" />
              </path>
            </svg>
          </Loader>
        )}
        {props.children}
      </button>
    </ButtonWrapper>
  )
}

const Whatsapp = (props) => {
  return (
    <ButtonWrapper size={props.size} socialMedia="whatsapp">
      <button>
        <WhatsappContent>
          <FontAwesomeIcon icon={['fab', 'whatsapp']} />
          {props.children !== 'undefined' && (
            <span className="whatsapp-text">
              {props.children}
            </span>
          )}
        </WhatsappContent>
      </button>
    </ButtonWrapper>
  )
}

const Facebook = (props) => {
  return(
    <ButtonWrapper size={props.size} socialMedia="facebook">
      <button>
        <FacebookContent>
          <div className="facebook-icon">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </div>
          <div className="facebook-line"/>
          <p className="facebook-text">
            <span className="counter">{props.counter}</span>
            {props.children}
          </p>
        </FacebookContent>
      </button>
    </ButtonWrapper>
  )
}

Default.prototypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
  isLoading: PropTypes.bool
}


export default {
  Default,
  Whatsapp,
  Facebook
}
