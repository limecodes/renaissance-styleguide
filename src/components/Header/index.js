import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #dee2e6;
  background-color: #fff;
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`

const MenuItem = styled.li`
  display: inline-block;
  padding: 1rem;
`

const MenuLink = styled.a`
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
`

const CloseButton = styled.button`
  border: 0;
  background: transparent;
  color: rgba(0, 0, 0, 0.5);
`

export default () => (
  <HeaderWrapper>
    <Menu>
      <MenuItem>
        <CloseButton>
          <FontAwesomeIcon icon="bars" />
        </CloseButton>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/home">Home</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="/patients">Patients</MenuLink>
      </MenuItem>
    </Menu>
  </HeaderWrapper>
)
