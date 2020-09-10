import React from 'react'
import renderer from 'react-test-renderer'

import Table from '../src/components/Table'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

test('Table Renders Successfully', () => {
  const data = ['a', 'b', 'c']

  const tree = renderer.create(<Table columns={3} contents={data} />)

  expect(tree).toMatchSnapshot()
})
