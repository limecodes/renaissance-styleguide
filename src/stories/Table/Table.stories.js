import React from 'react'

import Table from '../../components/Table'

export default {
  title: 'Common/Table',
  component: Table,
}

const Template = (args) => <Table {...args} />

const headers = [
  'Patient Name',
  'Counselor',
  'Primary Contact',
  'Admission Date',
  'Discharge Date',
]

const patients = [
  {
    name: 'John Marcus Smith',
    counselor: 'James Jacob Gill',
    primaryContact: 'Julia Fay Smith (Spouse)',
    admissionDate: 'January 1st, 1970',
    dischargeDate: null,
  },
  {
    name: 'John Marcus Smith',
    counselor: 'James Jacob Gill',
    primaryContact: 'Julia Fay Smith (Spouse)',
    admissionDate: 'January 1st, 1970',
    dischargeDate: null,
  },
]

export const NoHeaders = Template.bind({})
NoHeaders.args = {
  columns: headers.length,
  contents: patients,
}

export const WithHeaders = Template.bind({})
WithHeaders.args = {
  columns: headers.length,
  contents: patients,
  headers: headers,
}

export const Numbered = Template.bind({})
Numbered.args = {
  columns: headers.length,
  contents: patients,
  headers: headers,
  numbered: true,
}
