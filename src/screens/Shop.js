import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { accessAuthorize } from '../utils/funcAuthorize'
import { useSelector } from 'react-redux'
import ShopComponent from '../components/shopComponent'

const Shop = ({ history }) => {
  const rebelList = useSelector(state => state.starshipList.list.RebelList)
  const empireList = useSelector(state => state.starshipList.list.EmpireList)
  useEffect(() => {
    accessAuthorize(history, 4)
  }, [])
  return (
    <ShopComponent
      rebelList={rebelList}
      empireList={empireList}
    ></ShopComponent>
  )
}

Shop.propTypes = {
  history: PropTypes.func
}

export default Shop
