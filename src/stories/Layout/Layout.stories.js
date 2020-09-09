import React from 'react'

import Layout from '../../components/Layout'

export default {
  title: 'Layout/Main',
  component: Layout,
}

const Template = (args) => <Layout {...args} />

export const Main = Template.bind({})
Main.args = {}
