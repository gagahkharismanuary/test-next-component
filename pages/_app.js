import App, { Container } from 'next/app'
import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp, faFacebookF } from '@fortawesome/free-brands-svg-icons'

class MyApp extends App {
  render() {
    library.add(faWhatsapp, faFacebookF)
    const { Component, pageProps } = this.props
    return (
      <Container>
          <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
