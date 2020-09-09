import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
`

const Sidebar = styled.section`
  background-color: red;
  width: 250px;
  height: 100vh;
`

const PageWrapper = styled.section`
  background-color: green;
  width: 100%;
  height: 100vh;
`

const Layout = (props) => {
  return (
    <Container>
      <Sidebar>Sidebar</Sidebar>
      <PageWrapper>PageWrapper</PageWrapper>
    </Container>
  )
}

export default Layout
