import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

const Column = styled.div`
  border: 1px solid #fff;
  padding: 1rem;
  width: calc(100% / ${(props) => props.columns});
`

const TableColumns = (props) => {
  const { items, columns, numbered, header, number } = props

  if (numbered && header) {
    return (
      <>
        <Column columns={columns + 1}>#</Column>
        {items.map((column, i) => (
          <Column key={`table_column_${i}`} columns={columns + 1}>
            {column || 'N/A'}
          </Column>
        ))}
      </>
    )
  } else if (numbered) {
    return (
      <>
        <Column columns={columns + 1}>{number + 1}</Column>
        {items.map((column, i) => (
          <Column key={`table_column_${i}`} columns={columns + 1}>
            {column || 'N/A'}
          </Column>
        ))}
      </>
    )
  }

  return items.map((column, i) => (
    <Column key={`table_column_${i}`} columns={columns}>
      {column || 'N/A'}
    </Column>
  ))
}

TableColumns.propTypes = {
  columns: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
  numbered: PropTypes.bool,
  number: PropTypes.number,
}

export default TableColumns
