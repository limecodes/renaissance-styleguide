import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  padding: 1rem;
  background-color: #fff;
`

export default () => (
  <HeaderWrapper>
    <FontAwesomeIcon icon="bars" />
  </HeaderWrapper>
)
