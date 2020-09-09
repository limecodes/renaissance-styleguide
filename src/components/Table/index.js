import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import TableContent from './TableContent'

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Table = (props) => {
  const { columns, headers, contents, numbered } = props

  return (
    <TableWrapper>
      <TableContent
        numbered={numbered || false}
        columns={columns}
        items={contents}
        headers={headers || []}
      />
    </TableWrapper>
  )
}

Table.propTypes = {
  columns: PropTypes.number.isRequired,
  headers: PropTypes.array,
  contents: PropTypes.array.isRequired,
  numbered: PropTypes.boolean,
}

export default Table
