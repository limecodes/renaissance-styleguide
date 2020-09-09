import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import TableContent from './TableContent'

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

/**
- An abstract table that allows headers and displayed in a numbered list
**/

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
  /**
    Supply the number of columns to display in the table
   */
  columns: PropTypes.number.isRequired,
  /**
    Provide the headers of the columns for the table, if provided will display the headers of the columns
   */
  headers: PropTypes.array,
  /**
    Provide the contents of the data to be displayed in the table as an array of objects
   */
  contents: PropTypes.array.isRequired,
  /**
    Display the table as a numbered list
   */
  numbered: PropTypes.bool,
}

export default Table
