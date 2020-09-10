import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../src/components/Layout'

test('Layout Renders Correctly', () => {
  const tree = renderer.create(<Layout />)

  expect(tree).toMatchSnapshot()
})
