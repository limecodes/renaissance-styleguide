import React from 'react'
import styled from 'styled-components'
import { PropTypes } from 'prop-types'

import TableColumns from './TableColumns'

const Row = styled.div`
  display: flex;
  background-color: #e0dede;
`

const Header = styled(Row)`
  background-color: grey;
  color: #fff;
`

const TableRow = (props) => {
  const { items, columns, header, numbered, number } = props

  return header ? (
    <Header>
      <TableColumns
        header
        numbered={numbered}
        columns={columns}
        items={items}
      />
    </Header>
  ) : (
    <Row>
      <TableColumns
        number={number}
        header={header || false}
        numbered={numbered}
        columns={columns}
        items={items}
      />
    </Row>
  )
}

TableRow.propTypes = {
  items: PropTypes.array.isRequired,
  columns: PropTypes.number.isRequired,
  header: PropTypes.boolean,
  numbered: PropTypes.boolean,
  number: PropTypes.number,
}

export default TableRow
