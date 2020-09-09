import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import Table from '../components/Table'

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
