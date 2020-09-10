import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #000;
  background-color: #fff;
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Link = styled.li`
  display: inline-block;
  padding: 1rem;
`

const CloseButton = styled.button`
  border: 0;
  background: transparent;
`

export default () => (
  <HeaderWrapper>
    <Links>
      <Link>
        <CloseButton>
          <FontAwesomeIcon icon="bars" />
        </CloseButton>
      </Link>
      <Link>
        <a href="/home">Home</a>
      </Link>
      <Link>
        <a href="/patients">Patients</a>
      </Link>
    </Links>
  </HeaderWrapper>
)
