import React from 'react'
import { PropTypes } from 'prop-types'

import TableRow from './TableRow'

const TableContent = (props) => {
  const { items, columns, headers, numbered } = props

  if (headers.length > 0) {
    return (
      <>
        <TableRow
          header
          numbered={numbered}
          columns={columns}
          items={headers}
        />
        {items.map((item, i) => (
          <TableRow
            key={`table_row_${i}`}
            number={numbered ? i : 0}
            numbered={numbered}
            columns={columns}
            items={Object.values(item)}
          />
        ))}
      </>
    )
  }

  return items.map((item, i) => (
    <TableRow
      key={`table_row_${i}`}
      columns={columns}
      items={Object.values(item)}
    />
  ))
}

TableContent.propTypes = {
  columns: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string),
  numbered: PropTypes.bool,
}

export default TableContent
