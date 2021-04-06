import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { buyItem } from '../../utils/funcScreens'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const ItemComponent = ({
  title,
  cost,
  quantity,
  description,
  urlImg,
  type,
  profile
}) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [message, setMessage] = useState('')
  return (
    <div>
      <ItemDiv>
        <table>
          <tbody>
            <tr>
              <ItemFirstTd>
                <ItemTitle>{title}</ItemTitle>
              </ItemFirstTd>
              <ItemSecondTd>
                <NumberDiv>
                  <ItemNumber>{`Qtte: ${quantity}`}</ItemNumber>
                </NumberDiv>
                <NumberDiv>
                  <ItemNumber>{`Prix: ${cost} `}</ItemNumber>
                </NumberDiv>
              </ItemSecondTd>
              <td>
                <ButtonDiv>
                  <BuyButton
                    onClick={e => {
                      buyItem(
                        e,
                        type,
                        profile,
                        cost,
                        quantity,
                        setMessage,
                        history,
                        dispatch
                      )
                    }}
                  >{`Acheter`}</BuyButton>
                </ButtonDiv>
              </td>
            </tr>

            <tr>
              {description ? (
                <ItemFirstTd>
                  <ItemDescription>{description}</ItemDescription>
                </ItemFirstTd>
              ) : (
                <ItemFirstTd></ItemFirstTd>
              )}
              {urlImg ? (
                <ItemSecondTd>
                  <ItemImage src={urlImg} />
                </ItemSecondTd>
              ) : (
                <ItemSecondTd></ItemSecondTd>
              )}
            </tr>
          </tbody>
        </table>
      </ItemDiv>
      <MessageStyle>{message}</MessageStyle>
    </div>
  )
}

const ItemDiv = styled.div`
  width: 400px;
  margin: 5px 5px;
  padding: 5px 10px;
  text-align: left;
  border: ${props => props.theme.border} solid 1px;
  border-radius: 25px;
`
const ItemTitle = styled.span`
  padding: 2px 5px;
`

const ItemDescription = styled.p``

const ItemImage = styled.img``

const ItemNumber = styled.span``

const ItemFirstTd = styled.td`
  width: 200px;
  flex-direction: row;
`
const ItemSecondTd = styled.td`
  width: 125px;
  flex-direction: row;
`

const NumberDiv = styled.div``
const ButtonDiv = styled.div``
const BuyButton = styled.button`
  margin: 5px 0px;
  border: ${props => props.theme.border} solid 1px;
  padding: 4px 6px;
  border-radius: 10px;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
`
const MessageStyle = styled.span`
  color: red;
`

ItemComponent.propTypes = {
  title: PropTypes.string,
  cost: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string,
  urlImg: PropTypes.string,
  type: PropTypes.string,
  profile: PropTypes.object
}

export default ItemComponent
