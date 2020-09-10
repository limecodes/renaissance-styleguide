import React from 'react'
import renderer from 'react-test-renderer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Header from '../src/components/Header'

library.add(faBars)

test('Renders Correctly', () => {
  const tree = renderer.create(<Header />)

  expect(tree).toMatchSnapshot()
})
