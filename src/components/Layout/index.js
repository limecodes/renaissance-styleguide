import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import Header from '../Header'
import Sidebar from '../Sidebar'

const Container = styled.main`
  display: flex;
`

const PageWrapper = styled.section`
  background-color: transparent;
  width: 100%;
  height: 100vh;
`

const Layout = (props) => {
  const { withHeader } = props

  return (
    <Container>
      <Sidebar />
      <PageWrapper>{withHeader && <Header />}</PageWrapper>
    </Container>
  )
}

Layout.propTypes = {
  withHeader: PropTypes.bool,
}

Layout.defaultProps = {
  withHeader: true,
}

export default Layout
