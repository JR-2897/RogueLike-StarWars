import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { accessAuthorize } from '../utils/funcAuthorize'
import RestockComponent from '../components/restockComponent'

const Restock = ({ history }) => {
  useEffect(() => {
    accessAuthorize(history, 4)
  }, [])
  return <RestockComponent history={history}></RestockComponent>
}

Restock.propTypes = { history: PropTypes.func }

export default Restock
