import {
  getEmpireShips,
  getRebelShips,
  transformDataForStarship
} from '../utils/funcStarship'
import axios from 'axios'

export const UPDATE_REBELSTARSHIPLIST = 'UPDATE_REBELSTARSHIPLIST'
export const UPDATE_EMPIRESTARSHIPLIST = 'UPDATE_EMPIRESTARSHIPLIST'

export const updateRebelStarshipList = starshipList => ({
  type: UPDATE_REBELSTARSHIPLIST,
  payload: starshipList
})

export const updateEmpireStarshipList = starshipList => ({
  type: UPDATE_EMPIRESTARSHIPLIST,
  payload: starshipList
})

export const getStarshipList = () => dispatch => {
  getStarshipListApi(getRebelShips, updateRebelStarshipList, dispatch)
  getStarshipListApi(getEmpireShips, updateEmpireStarshipList, dispatch)
}

export const getStarshipListApi = (
  getStarshipList,
  dispatchAction,
  dispatch
) => {
  const listShip = getStarshipList()
  listShip.forEach(id => {
    axios({
      method: 'GET',
      url: `https://swapi.dev/api/starships/${id}`
    })
      .then(res => {
        const starship = transformDataForStarship(id, res.data)
        dispatch(dispatchAction(starship))
      })
      .catch(err => {
        console.log(err)
      })
  })
}
