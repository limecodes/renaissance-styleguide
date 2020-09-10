import React from 'react'
import renderer from 'react-test-renderer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Layout from '../src/components/Layout'

library.add(faBars)

test('Layout Renders Correctly', () => {
  const tree = renderer.create(<Layout />)

  expect(tree).toMatchSnapshot()
})
