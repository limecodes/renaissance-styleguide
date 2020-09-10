import React from 'react'
import { addDecorator } from '@storybook/react'
import { GlobalStyle } from '../src/shared/global'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
