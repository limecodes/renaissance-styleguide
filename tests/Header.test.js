import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../src/components/Header'

test('Renders Correctly', () => {
  const tree = renderer.create(<Header />)

  expect(tree).toMatchSnapshot()
})
